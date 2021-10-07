import React from 'react';

interface LoginInputProps {
    title: string;
    type: 'email' | 'password';
    placeholder: string;
    value: string;
    onValueChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

const LoginInput: React.FC<LoginInputProps> = ({
    title,
    type,
    placeholder,
    value,
    onValueChange,
}: LoginInputProps) => {
    return (
        <div className="mt-8 content-center">
            <label className="ml-1 text-sm font-bold text-gray-700 tracking-wide">
                {title}
            </label>

            <input
                className="w-full text-base px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-indigo-400"
                type={type}
                placeholder={placeholder}
                value={value}
                onChange={onValueChange}
            />
        </div>
    );
};

export default LoginInput;
