import React from 'react';

interface SideBarProps {
    title: string;
    tagline: string;
}

const SideBar: React.FC<SideBarProps> = ({ title, tagline }: SideBarProps) => {
    return (
        <div
            className="sm:w-1/2 xl:w-3/5 h-full hidden md:flex flex-auto items-center justify-center p-10 overflow-hidden bg-purple-900 text-white bg-no-repeat bg-cover relative"
            style={{
                backgroundImage:
                    'url(https://images.unsplash.com/photo-1579451861283-a2239070aaa9?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80)',
            }}
        >
            <div className="absolute bg-gradient-to-b from-indigo-600 to-blue-500 opacity-75 inset-0 z-0"></div>
            <div className="w-full  max-w-md z-10">
                <div className="sm:text-4xl xl:text-5xl font-bold leading-tight mb-6">
                    {title}
                </div>
                <div className="sm:text-sm xl:text-md text-gray-200 font-normal">
                    {tagline}
                </div>
            </div>
        </div>
    );
};

export default SideBar;
