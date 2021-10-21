import { XIcon } from '@heroicons/react/outline';
import React from 'react';

export const SkillBox: React.FC = () => {
    return (
        <div className="col-span-6 flex rounded-md shadow-sm">
            <input
                type="text"
                name="company-website"
                id="company-website"
                className="focus:ring-indigo-500 focus:border-indigo-500 flex-1 block w-full rounded-none rounded-l-md sm:text-sm border-gray-300"
                placeholder="www.example.com"
            />
            <span className="inline-flex items-center px-3 rounded-r-md border border-l-0 border-gray-300 bg-gray-50 text-gray-500 text-sm cursor-pointer">
                <XIcon className="w-5 h-5" />
            </span>
        </div>
    );
};
