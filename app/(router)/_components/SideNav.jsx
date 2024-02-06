"use client";
import React, { useState, useEffect } from 'react';
import {BookOpen, BadgeIcon, GraduationCap} from 'lucide-react'
import Image from 'next/image'
import { X } from 'lucide-react'; 

function SideNav({ toggleSidebar }) {
    const menu=[
        {id:1, name:'All Courses',icon:BookOpen},
        {id:2, name:'Membership',icon:BadgeIcon},
        {id:3, name:'Be Instructor',icon:GraduationCap}
    ]
    const [windowWidth, setWindowWidth] = useState(() => window.innerWidth);
    useEffect(() => {
        const handleResize = () => {
            setWindowWidth(window.innerWidth);
        };
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);
    const breakpoint = 640;

  return (
    <div className='p-5 bg-white shadow-sm border h-screen relative'>
            {/* Conditional rendering of close button based on window width */}
            {windowWidth < breakpoint && (
                <button onClick={toggleSidebar} className="absolute top-0 right-0 p-4">
                    <X className="h-6 w-6" /> 
                </button>
            )}
        <Image src='/logo.png' alt='logo' 
        width={200} height={70}/>
        <hr className='mt-7'></hr>
        {/* Menu List */}
        <div className='mt-5'>
            {menu.map((item,index)=>
             <div className='group flex gap-3 mt-2 p-3 
             text-[18px] items-center text-gray-500 
             cursor-pointer hover:bg-primary 
             hover:text-white rounded-md
             transition-all ease-in-out duration-200'>
                <item.icon className='group-hover:animate-bounce'/>
                <h2>{item.name}</h2>
            </div>
                )}
        </div>
    </div>
  )
}

export default SideNav