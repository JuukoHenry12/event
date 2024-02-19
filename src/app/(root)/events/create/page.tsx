import EventForm from '@/components/shared/EventForm'
import { auth } from '@clerk/nextjs'
import React from 'react'

const CreateEvents= () => {

  const {sessionClaims} = auth()
  const userId= sessionClaims?.userId as string

  return (
    <>
     <section className='bg-primary-50 bg-dotted-pattern bg-cover bg-center py-5 md:py-10'>
        <div className='wrapper h3-bold text-center sm:text-left'>
          Create Event
        </div>
     </section>

     <div className='wrapper my-8'>
        <EventForm userId={userId} type="Create"/>
     </div>

    </>
  )
}

export default CreateEvents