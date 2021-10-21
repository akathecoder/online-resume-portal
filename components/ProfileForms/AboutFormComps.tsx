import React from 'react';

export const Name: React.FC = () => {
    return (
        <div className="col-span-6 sm:col-span-3">
            <label
                htmlFor="first-name"
                className="block text-sm font-medium text-gray-700"
            >
                Name
            </label>
            <input
                type="text"
                name="first-name"
                id="first-name"
                autoComplete="given-name"
                className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
            />
        </div>
    );
};

export const Title: React.FC = () => {
    return (
        <div className="col-span-6 sm:col-span-3">
            <label
                htmlFor="first-name"
                className="block text-sm font-medium text-gray-700"
            >
                Title
            </label>
            <input
                type="text"
                name="first-name"
                id="first-name"
                autoComplete="given-name"
                className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
            />
        </div>
    );
};

export const Link: React.FC = () => {
    return (
        <div className="col-span-6">
            <label
                htmlFor="first-name"
                className="block text-sm font-medium text-gray-700"
            >
                Link
            </label>
            <div className="mt-1 flex rounded-md shadow-sm">
                <span className="inline-flex items-center px-3 rounded-l-md border border-r-0 border-gray-300 bg-gray-50 text-gray-500 text-sm">
                    https://
                </span>
                <input
                    type="text"
                    name="company-website"
                    id="company-website"
                    className="focus:ring-indigo-500 focus:border-indigo-500 flex-1 block w-full rounded-none rounded-r-md sm:text-sm border-gray-300"
                    placeholder="www.example.com"
                />
            </div>
        </div>
    );
};
