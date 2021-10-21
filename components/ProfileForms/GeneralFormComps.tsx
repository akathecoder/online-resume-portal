import React from 'react';

interface HeadingProps {
    title: string;
    description?: string;
}

export const Heading: React.FC<HeadingProps> = ({
    title,
    description,
}: HeadingProps) => {
    return (
        <div className="md:col-span-1 ">
            <div className="px-4 sm:px-0 sticky top-28">
                <h3 className="text-lg font-medium leading-6 text-gray-900">
                    {title}
                </h3>
                <p className="mt-1 text-sm text-gray-600">{description}</p>
            </div>
        </div>
    );
};

export const SaveButton: React.FC = () => {
    return (
        <button
            type="submit"
            className="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
        >
            Save
        </button>
    );
};

export const FormDivider: React.FC = () => {
    return (
        <div className="hidden sm:block" aria-hidden="true">
            <div className="py-5">
                <div className="border-t border-gray-200" />
            </div>
        </div>
    );
};
