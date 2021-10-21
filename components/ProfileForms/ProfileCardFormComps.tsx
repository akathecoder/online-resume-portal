import React from 'react';

export const ProfilePhoto: React.FC = () => {
    return (
        <div className="col-span-6">
            <label className="block text-sm font-medium text-gray-700">
                Profile Photo
            </label>
            <div className="mt-1 flex items-center">
                <span className="inline-block h-12 w-12 rounded-full overflow-hidden bg-gray-100">
                    <svg
                        className="h-full w-full text-gray-300"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                    >
                        <path d="M24 20.993V24H0v-2.996A14.977 14.977 0 0112.004 15c4.904 0 9.26 2.354 11.996 5.993zM16.002 8.999a4 4 0 11-8 0 4 4 0 018 0z" />
                    </svg>
                </span>
                <button
                    type="button"
                    className="ml-5 bg-white py-2 px-3 border border-gray-300 rounded-md shadow-sm text-sm leading-4 font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                >
                    Change
                </button>
            </div>
        </div>
    );
};

export const Name: React.FC = () => {
    return (
        <div className="col-span-6 sm:col-span-3">
            <label
                htmlFor="first-name"
                className="block text-sm font-medium text-gray-700"
            >
                Full Name
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

export const Position: React.FC = () => {
    return (
        <div className="col-span-6 sm:col-span-3">
            <label
                htmlFor="last-name"
                className="block text-sm font-medium text-gray-700"
            >
                Position
            </label>
            <input
                type="text"
                name="last-name"
                id="last-name"
                autoComplete="family-name"
                className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
            />
        </div>
    );
};

export const About: React.FC = () => {
    return (
        <div className="col-span-6">
            <label
                htmlFor="about"
                className="block text-sm font-medium text-gray-700"
            >
                About
            </label>
            <div className="mt-1">
                <textarea
                    id="about"
                    name="about"
                    rows={3}
                    className="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 mt-1 block w-full sm:text-sm border border-gray-300 rounded-md"
                    placeholder="you@example.com"
                    defaultValue={''}
                />
            </div>
            <p className="mt-2 text-sm text-gray-500">
                Brief description for your profile. URLs are hyperlinked.
            </p>
        </div>
    );
};

export const Status: React.FC = () => {
    return (
        <div className="col-span-6 sm:col-span-3">
            <label
                htmlFor="status"
                className="block text-sm font-medium text-gray-700"
            >
                Status
            </label>
            <select
                id="status"
                name="status"
                className="mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            >
                <option>Student</option>
                <option>Graduation</option>
            </select>
        </div>
    );
};

export const GraduationDate: React.FC = () => {
    return (
        <div className=" col-span-6 sm:col-span-3">
            <label
                htmlFor="graduation-date"
                className="block text-sm font-medium text-gray-700"
            >
                Graduation Date
            </label>

            <div className=" grid grid-cols-2 gap-2 col-span-6 sm:col-span-3">
                <select
                    id="graduation-month"
                    name="graduation-month"
                    className="mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                >
                    {/* TODO: Check whether this System Works */}
                    <option selected disabled>
                        Month
                    </option>
                    <option>January</option>
                    <option>February</option>
                    <option>March</option>
                    <option>April</option>
                    <option>May</option>
                    <option>June</option>
                    <option>July</option>
                    <option>August</option>
                    <option>September</option>
                    <option>October</option>
                    <option>November</option>
                    <option>December</option>
                </select>

                <select
                    id="graduation-year"
                    name="graduation-year"
                    className="mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                >
                    {/* TODO: Check whether this System Works */}
                    <option selected disabled>
                        Year
                    </option>
                    <option>2012</option>
                    <option>2013</option>
                    <option>2014</option>
                    <option>2015</option>
                    <option>2016</option>
                    <option>2017</option>
                    <option>2018</option>
                    <option>2019</option>
                    <option>2020</option>
                    <option>2021</option>
                    <option>2022</option>
                    <option>2023</option>
                    <option>2024</option>
                    <option>2025</option>
                    <option>2026</option>
                </select>
            </div>
        </div>
    );
};

export const Degree: React.FC = () => {
    return (
        <div className="col-span-6 sm:col-span-3">
            <label
                htmlFor="last-name"
                className="block text-sm font-medium text-gray-700"
            >
                Degree
            </label>
            <input
                type="text"
                name="last-name"
                id="last-name"
                autoComplete="family-name"
                className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
            />
        </div>
    );
};

export const Branch: React.FC = () => {
    return (
        <div className="col-span-6 sm:col-span-3">
            <label
                htmlFor="last-name"
                className="block text-sm font-medium text-gray-700"
            >
                Branch
            </label>
            <input
                type="text"
                name="last-name"
                id="last-name"
                autoComplete="family-name"
                className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
            />
        </div>
    );
};