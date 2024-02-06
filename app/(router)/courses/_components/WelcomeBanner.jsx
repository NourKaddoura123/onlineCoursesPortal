import React from 'react'
import Image from 'next/image'


function WelcomeBanner() {
  return (
    <div className='flex gap-5 items-center bg-white rounded-xl p-5'>
        <Image src='/panda.png' alt='panda' width={100} height={100}/>
        <div>
            <h2 className='font-bold text-[30px]'>Welcome to <span className='text-primary'>Nour's</span> Academy</h2>
            <h2 className='text-gray-500'>Explore, Learn and build Real Life Projects</h2>
        </div>
    </div>
  )
}

export default WelcomeBanner