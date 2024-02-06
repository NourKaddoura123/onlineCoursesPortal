"use client";
import React, { useState } from 'react';
import SideNav from './_components/SideNav';
import Header from './_components/Header';

function layout({ children }) {
  // State to manage sidebar visibility
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  // Function to toggle sidebar
  const toggleSidebar = () => setIsSidebarOpen(!isSidebarOpen);

  return (
    <div className="flex">
      {/* Sidebar */}
      <div className={`fixed z-10 h-full ${isSidebarOpen ? 'block' : 'hidden'} sm:block w-64`}>
      <SideNav toggleSidebar={toggleSidebar} />
      </div>
      <div className="flex-1">
        {/* Passing toggle function to Header */}
        <Header toggleSidebar={toggleSidebar} />
        <div className={`sm:ml-64 ${isSidebarOpen ? 'ml-64' : 'ml-0'}`}>
          {children}
        </div>
      </div>
    </div>
  );
}

export default layout;
