'user server'

import { handleError } from "@/lib/utils"
import {  CreateUserParams,UpdateUserParams} from "@/types"
import {  connectionToDatabase} from "../index"
import User from "../models/user.models"
import Order from "../models/order.models"
import Event from "../models/event.models"
import { revalidatePath } from "next/cache"

export const CreateUser = async(user:CreateUserParams)=>{
    try {
        await  connectionToDatabase();  
        const newUser = await User.create(user)
        return JSON.parse(JSON.stringify(newUser))

    }catch(error){
        handleError(error)
    }
}
export async function getUserBy(userId:string){
    try {

        await connectionToDatabase()
        const user = await User.findById(userId)
        if(!user) throw new Error('User not found')
        return JSON.parse(JSON.stringify(user))
    }catch(error){
        handleError(error) 
    }
}

export async function updateUser(clerkId:string,user:UpdateUserParams){
  try{
    await connectionToDatabase()
    const updateUser = await User.findOneAndUpdate({clerkId},user,{new:true})
    if(!updateUser) throw new Error('User update failed')
    return JSON.parse(JSON.stringify(updateUser))
    
  }catch(error){
     handleError(error)
  }
}

export async function deletedUser(clerkId:string){
    try{
       
        await connectionToDatabase()

        const userToDelete = await User.findOne({clerkId})

        if(!userToDelete){
             throw new Error('user not found')
        }

        // unlick relationships
        await Promise.all([
            Event.updateMany(
                {_id:{$in:userToDelete.events}},
                { $pull: { organizer: userToDelete._id } }
            ),
            Order.updateMany({ _id: { $in: userToDelete.orders } }, { $unset: { buyer: 1 } }),
        ])

        //Delete User
        const deletedUser = await User.findByIdAndDelete(userToDelete._id)
        revalidatePath('/')
        return deletedUser ? JSON.parse(JSON.stringify(deletedUser)):null
    }catch(error){
        handleError(error)
    }
}