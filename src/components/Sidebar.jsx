import React, { useState } from 'react';
import logo from '../assets/logo.png';
import { HomeIcon, LockClosedIcon, ArrowsUpDownIcon, UserGroupIcon, ChartBarIcon, Cog6ToothIcon } from '@heroicons/react/24/outline';
import navItems from '.././data/navItems.js';

const Sidebar = () => {
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);

    // Toggle Sidebar on Mobile
    const toggleSidebar = () => {
        setIsSidebarOpen(!isSidebarOpen);
    };

    return (
        <div className='flex'>
            {/* Sidebar */}
            <aside
                className={`h-screen w-64 bg-whisper border-r border-whisper flex flex-col fixed md:relative transition-all duration-300 ${isSidebarOpen ? 'left-0' : '-left-64'} md:left-0`}
            >
                {/* Close Button */}
                {isSidebarOpen && (
                    <button
                        onClick={toggleSidebar}
                        className='absolute top-4 left-4 p-2 text-shark bg-transparent hover:bg-opacity-80 transition duration-200'
                    >
                        <svg
                            className='w-6 h-6'
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M6 18L18 6M6 6l12 12"
                            />
                        </svg>
                    </button>



                )}

                {/* Logo + Title */}
                <div className='flex gap-4 items-center justify-center mt-5'>
                    <img className='w-5 h-5' src={logo} alt='logo' />
                    <span className='text-md font-mont'>
            Crypto<span className='font-bold'>Board</span>
          </span>
                </div>

                {/* Nav Items */}
                <nav className='flex flex-col m-7 p-5 w-full gap-y-10 font-mont font-semibold text-md text-shark cursor-pointer overflow-hidden flex-grow'>
                    {navItems.map((item, index) => {
                        const Icon = item.icon;
                        return (
                            <div className='flex items-center gap-10' key={index}>
                                <Icon className="w-5 h-5" />
                                <span>{item.name}</span>
                            </div>
                        );
                    })}
                </nav>

                {/* Guide Button */}
                <div className='flex justify-center mb-6'>
                    <button className='p-3.5 bg-cornflower-blue text-white w-40 rounded-lg'>
                        Guide
                    </button>
                </div>
            </aside>

            {/* Mobile Hamburger */}
            <header className='md:hidden flex justify-between items-center p-4 w-full'>
                <button onClick={toggleSidebar} className='text-shark'>
                    <svg className='w-6 h-6' xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                    </svg>
                </button>
            </header>
        </div>
    );
};

export default Sidebar;
