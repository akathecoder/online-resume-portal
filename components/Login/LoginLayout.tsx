import React from 'react';

interface LoginLayoutProps {
    children: React.ReactNode;
}

const LoginLayout: React.FC<LoginLayoutProps> = ({
    children,
}: LoginLayoutProps) => {
    return (
        <div className="relative min-h-screen flex ">
            <div className="flex flex-col sm:flex-row items-center md:items-start sm:justify-center md:justify-start flex-auto min-w-0 bg-white">
                {children}
            </div>
        </div>
    );
};

export default LoginLayout;
