import React from 'react'
import WelcomeBanner from './_components/WelcomeBanner'
import CourseList from './_components/CourseList'

function Courses() {
  return (
    <div className='grid grid-cols-1 md:grid-cols-3 p-5'>
      {/* Left Container */}
      <div className='col-span-2'>
        {/* Banner */}
        <WelcomeBanner />
        {/* Course List Section */}
        <CourseList/>
      </div>
      {/* Right Container */}
    </div>
  )
}

export default Courses