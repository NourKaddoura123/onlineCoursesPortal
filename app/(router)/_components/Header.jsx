import React from 'react';
import { Menu } from 'lucide-react'; 
import {BellDot, Search} from 'lucide-react'
import {Button} from '@/components/ui/button'

function Header({ toggleSidebar }) {
  return (
    <div className='p-4 bg-white flex justify-between items-center'>
      {/* Toggle button for small screens */}
      <button className="sm:hidden p-2" onClick={toggleSidebar}>
        <Menu className='h-5 w-5' />
      </button>
        {/*Search bar*/}
        <div className='flex gap-2 border p-2 rounded-md ml-64'>
            <Search className='h-5 w-5'/>
            <input type="text" placeholder='Search' className='outline-none'></input>
            </div>
            {/*Get Started Button and bell icon */}
            <div className='flex items-center gap-4'>
            <BellDot className='text-gray-500'/>
            <Button>Get Started</Button>
            </div>
    </div>
  );
}

export default Header;
