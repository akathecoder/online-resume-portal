import React from 'react';
import LoginForm from './LoginForm';

interface LoginBarProps {
    title: string;
    tagline: string;
}

const LoginBar: React.FC<LoginBarProps> = ({
    title,
    tagline,
}: LoginBarProps) => {
    return (
        <div className="md:flex md:items-center md:justify-center w-full sm:w-auto md:h-full w-2/5 xl:w-2/5 p-8  md:p-10 lg:p-14 sm:rounded-lg md:rounded-none bg-white">
            <div className="max-w-md w-full space-y-8">
                <div className="text-center">
                    <h2 className="mt-6 text-3xl font-bold text-gray-900">
                        {title}
                    </h2>
                    <p className="mt-2 text-sm text-gray-500">{tagline}</p>
                </div>

                <LoginForm />
            </div>
        </div>
    );
};

export default LoginBar;
