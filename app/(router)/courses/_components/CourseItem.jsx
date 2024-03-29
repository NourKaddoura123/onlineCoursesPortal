import React from 'react'
import Image from 'next/image'

function CourseItem({course}) {
  return (
    <div>
        <Image src={course?.banner?.url} 
        width={500}
        height={150}
        alt='banner'/>
    </div>
  )
}

export default CourseItem