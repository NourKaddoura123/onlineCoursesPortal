import React from 'react'
import SideNav from './_components/SideNav'

function layout({children}) { //pages going to render go to this layout
  return (
    <div>
    <div className='sm:w-64 sm:block fixed'>
        <SideNav/>
        </div>
        <div className='sml-64'>
        {children}</div></div>
  )
}

export default layout