import React from 'react'
import SideNav from './_components/SideNav'
import Header from './_components/Header'


function layout({children}) { //pages going to render go to this layout
  return (
    <div>
    <div className='sm:w-64 sm:block fixed'>
        <SideNav/>
        </div>
        <div className='ml-64'>
            <Header/>
        {children}</div></div>
  )
}

export default layout