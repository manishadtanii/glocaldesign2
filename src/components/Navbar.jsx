import React from 'react';

const Navbar = () => {
    return (
        <nav className="absolute top-0 left-0 w-full p-10 md:px-24 flex justify-between items-center z-50 pointer-events-none">
            <div className="flex flex-col items-start pointer-events-auto">
                <img
                    src="/images/logow.svg"
                    alt="Glocal Design"
                    className="h-8 md:h-10 w-auto transition-all duration-300"
                />
            </div>
            <button className="text-white hover:opacity-80 transition-opacity pointer-events-auto">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                    <line x1="4" y1="8" x2="20" y2="8"></line>
                    <line x1="4" y1="16" x2="20" y2="16"></line>
                </svg>
            </button>
        </nav>
    );
};

export default Navbar;
