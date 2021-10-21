import React from 'react';

export const SchoolName: React.FC = () => {
    return (
        <div className="col-span-6">
            <label
                htmlFor="first-name"
                className="block text-sm font-medium text-gray-700"
            >
                School Name
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

export const Degree: React.FC = () => {
    return (
        <div className="col-span-6 sm:col-span-2">
            <label
                htmlFor="first-name"
                className="block text-sm font-medium text-gray-700"
            >
                Degree
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

export const FieldOfStudy: React.FC = () => {
    return (
        <div className="col-span-6 sm:col-span-2">
            <label
                htmlFor="first-name"
                className="block text-sm font-medium text-gray-700"
            >
                Field of Study
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

export const Grade: React.FC = () => {
    return (
        <div className="col-span-6 sm:col-span-2">
            <label
                htmlFor="first-name"
                className="block text-sm font-medium text-gray-700"
            >
                Grade
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

export const StartDate: React.FC = () => {
    return (
        <div className=" col-span-6 sm:col-span-3">
            <label
                htmlFor="graduation-date"
                className="block text-sm font-medium text-gray-700"
            >
                Start Date
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

export const EndDate: React.FC = () => {
    return (
        <div className=" col-span-6 sm:col-span-3">
            <label
                htmlFor="graduation-date"
                className="block text-sm font-medium text-gray-700"
            >
                End Date
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

export const Details: React.FC = () => {
    return (
        <div className="col-span-6">
            <label
                htmlFor="about"
                className="block text-sm font-medium text-gray-700"
            >
                Details
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
        </div>
    );
};
