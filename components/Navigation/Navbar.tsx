import React from 'react';
import Link from 'next/link';
import { LoginIcon, UserCircleIcon } from '@heroicons/react/outline';
import { useUser } from '@auth0/nextjs-auth0';

const Navbar: React.FC = () => {
    const { user, error, isLoading } = useUser();

    if (isLoading) return <div>Loading...</div>;
    if (error) return <div>{error.message}</div>;

    return (
        <>
            <nav className=" bg-indigo-500 w-full flex fixed justify-between items-center mx-auto px-8 h-20 z-10">
                <div className="inline-flex whitespace-nowrap">
                    <Link href="/">
                        <span className="text-2xl text-white font-medium cursor-pointer">
                            Online Resume Portal
                        </span>
                    </Link>
                </div>

                {/* <div className="hidden sm:block flex-shrink flex-grow-0 justify-start container mx-auto px-10 items-center rounded-lg overflow-hidden">
                    <input
                        className="w-full h-12 rounded-md border border-gray-400 focus:outline-none focus:shadow-outline px-8 text-base text-gray-400 flex-grow outline-none"
                        type="search"
                        placeholder="Search . . ."
                    />
                </div> */}

                <div className="flex justify-end items-center relative">
                    {!user ? (
                        <a href="/login">
                            <span className="text-lg mr-2 font-medium text-white cursor-pointer">
                                Login
                            </span>

                            {/* <LoginIcon className="h-6 w-6 text-white" /> */}
                        </a>
                    ) : (
                        // <button
                        //     type="button"
                        //     className="inline-flex items-center relative px-2"
                        // >
                        //     <UserCircleIcon className="h-10 w-10 text-white" />
                        // </button>
                        <a href="/logout">
                            <span className="text-lg mr-2 font-medium text-white cursor-pointer">
                                Logout
                            </span>

                            {/* <LoginIcon className="h-6 w-6 text-white" /> */}
                        </a>
                    )}
                </div>
            </nav>

            <div className="h-20" />
        </>
    );
};

export default Navbar;
