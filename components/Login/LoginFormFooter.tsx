import React from 'react';

interface LoginFormFooterProps {
    signUpLink: string;
}

const LoginFormFooter: React.FC<LoginFormFooterProps> = ({
    signUpLink,
}: LoginFormFooterProps) => {
    return (
        <p className="flex flex-col items-center justify-center mt-10 text-center text-md text-gray-500">
            <span>Don't have an account?</span>
            <a
                href={signUpLink}
                className="text-indigo-400 hover:text-blue-500 no-underline hover:underline cursor-pointer transition ease-in duration-300"
            >
                Sign up
            </a>

            <span className="mt-4 text-xs">Copyright © 2021-2022</span>
        </p>
    );
};

export default LoginFormFooter;
