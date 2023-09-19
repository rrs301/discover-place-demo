import Image from 'next/image'
import React from 'react'

function Header() {
  return (
    <div className='p-5 shadow-sm flex items-center justify-between'>
        <div className='flex items-center gap-3'>
            <Image src='/logo.png' alt='logo'
            width={50} height={50}/>
            <h2 className='text-[25px] font-semibold tracking-widest
            text-red-500'>DISCOVER</h2>
        </div>
            <ul className=' gap-8 hidden sm:flex'>
                <li className='text-[18px] hover:text-red-500 cursor-pointer'>Home</li>
                <li className='text-[18px] hover:text-red-500 cursor-pointer'>About Us</li>
                <li className='text-[18px] hover:text-red-500 cursor-pointer'>Contact Us</li>

            </ul>
    </div>
  )
}

export default Header