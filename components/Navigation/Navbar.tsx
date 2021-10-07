import React from 'react';
import Link from 'next/link';
import { UserCircleIcon } from '@heroicons/react/outline';

const Navbar: React.FC = () => {
    return (
        <nav className=" bg-indigo-500 w-full flex relative justify-between items-center mx-auto px-8 h-20">
            <div className="inline-flex">
                <Link href="/">
                    <span className="text-2xl text-white font-medium cursor-pointer">
                        Online Resume Portal
                    </span>
                </Link>
            </div>

            <div className="hidden sm:block flex-shrink flex-grow-0 justify-start container mx-auto px-10 items-center rounded-lg overflow-hidden">
                <input
                    className="w-full h-12 rounded-md border border-gray-400 focus:outline-none focus:shadow-outline px-8 text-base text-gray-400 flex-grow outline-none"
                    type="search"
                    placeholder="Search . . ."
                />
            </div>

            <div className="flex justify-end items-center relative">
                <button
                    type="button"
                    className="inline-flex items-center relative px-2"
                >
                    <UserCircleIcon className="h-10 w-10 text-gray-300" />
                </button>
            </div>
        </nav>
    );
};

export default Navbar;
