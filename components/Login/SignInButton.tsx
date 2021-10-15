import React from 'react';

interface SignInButtonProps {
    children: React.ReactNode;
}

const SignInButton: React.FC<SignInButtonProps> = ({
    children,
}: SignInButtonProps) => {
    return (
        <button
            type="submit"
            className="w-full flex justify-center bg-gradient-to-r from-indigo-500 to-blue-600  hover:bg-gradient-to-l hover:from-blue-500 hover:to-indigo-600 text-gray-100 p-4  rounded-full tracking-wide font-semibold  shadow-lg cursor-pointer transition ease-in duration-500"
        >
            {children}
        </button>
    );
};

export default SignInButton;