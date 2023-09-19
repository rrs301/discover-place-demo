import Image from 'next/image'
import React from 'react'

function Hero() {
  return (
    <div>
        <div>
            <Image src="/bg.jpg" alt="bg"
            width={800} height={200} className='bg-blend-soft-light'/>
        </div>
    </div>
  )
}

export default Hero