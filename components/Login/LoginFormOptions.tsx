import React from 'react';

const LoginFormOptions: React.FC = () => {
    return (
        <div className="flex items-center justify-between px-1">
            <div className="flex items-center">
                <input
                    id="remember_me"
                    name="remember_me"
                    type="checkbox"
                    className="h-4 w-4 bg-blue-500 focus:ring-blue-400 border-gray-300 rounded"
                />
                <label
                    htmlFor="remember_me"
                    className="ml-2 block text-sm text-gray-900"
                >
                    Remember me
                </label>
            </div>

            <div className="text-sm">
                <a href="#" className="text-indigo-400 hover:text-blue-500">
                    Forgot your password?
                </a>
            </div>
        </div>
    );
};

export default LoginFormOptions;
