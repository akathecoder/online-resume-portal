import React from 'react';

export const Name: React.FC = () => {
    return (
        <div className="col-span-6">
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

export const Organization: React.FC = () => {
    return (
        <div className="col-span-6">
            <label
                htmlFor="first-name"
                className="block text-sm font-medium text-gray-700"
            >
                Organization
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

export const CredentialID: React.FC = () => {
    return (
        <div className="col-span-6">
            <label
                htmlFor="first-name"
                className="block text-sm font-medium text-gray-700"
            >
                CredentialID
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

export const CredentialUrl: React.FC = () => {
    return (
        <div className="col-span-6">
            <label
                htmlFor="company-website"
                className="block text-sm font-medium text-gray-700"
            >
                Website
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
