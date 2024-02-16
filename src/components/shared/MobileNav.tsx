import React from 'react'
import {
    Sheet,
    SheetClose,
    SheetContent,
    SheetDescription,
    SheetFooter,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
} from "@/components/ui/sheet"
import { Button } from '../ui/button'
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import Image from 'next/image'
import NavItem from './NavItem'
import { Separator } from "@/components/ui/separator"

const MobileNav = () => {
    return (
        <nav className='md:hidden'>
            <Sheet>
                <SheetTrigger  className="align-middle">
                    <Image src="/assets/icons/menu.svg" 
                    alt="alt" 
                    width={28} 
                    height={28} 
                    className="cursor-pointer"
                    />
                </SheetTrigger>
                <SheetContent
                    className="flex flex-col gap-6 bg-white md:hidden"
                >
                    <Image src="/assets/images/logo.svg" 
                    alt="evently not found" 
                    width={128} 
                    height={38} />
                    <Separator className="border border-gray-50" />
                    <NavItem/>
                </SheetContent>
            </Sheet>
        </nav>
    )
}

export default MobileNav