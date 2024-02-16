import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
const Footer = () => {
  return (
    <div className=' border-t' >
      <div className='flex-center wrapper between flex felx-col gap-4 text-center sm:flex-row'>
        <Link href='/'>
          <Image src="/assets/images/logo.svg" alt="alt" width={128} height={38} />
        </Link>
        <p>
          copyright JUUKO Henry @2024
        </p>
      </div>
    </div>
  )
}

export default Footer