import React from 'react';

interface ValueProps {
    value: string | number | undefined;
}

export const Name: React.FC<ValueProps> = ({ value }: ValueProps) => {
    return (
        <div className="col-span-6">
            <label
                htmlFor="certificationName"
                className="block text-sm font-medium text-gray-700"
            >
                Name
            </label>
            <input
                type="text"
                name="certificationName"
                id="certificationName"
                className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                defaultValue={value}
            />
        </div>
    );
};

export const Organization: React.FC<ValueProps> = ({ value }: ValueProps) => {
    return (
        <div className="col-span-6">
            <label
                htmlFor="organization"
                className="block text-sm font-medium text-gray-700"
            >
                Organization
            </label>
            <input
                type="text"
                name="organization"
                id="organization"
                className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                defaultValue={value}
            />
        </div>
    );
};

export const StartDate: React.FC<ValueProps> = ({ value }: ValueProps) => {
    const month = value ? value.toString().split(' ')[0] : '';
    const year = value ? value.toString().split(' ')[1] : '';

    return (
        <div className=" col-span-6 sm:col-span-3">
            <label
                htmlFor="startMonth"
                className="block text-sm font-medium text-gray-700"
            >
                Start Date
            </label>

            <div className=" grid grid-cols-2 gap-2 col-span-6 sm:col-span-3">
                <select
                    id="startMonth"
                    name="startMonth"
                    className="mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                    defaultValue={month}
                >
                    {/* TODO: Check whether this System Works */}
                    <option selected disabled hidden>
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
                    id="startYear"
                    name="startYear"
                    className="mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                    defaultValue={year}
                >
                    {/* TODO: Check whether this System Works */}
                    <option selected disabled hidden>
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

export const EndDate: React.FC<ValueProps> = ({ value }: ValueProps) => {
    const month = value ? value.toString().split(' ')[0] : '';
    const year = value ? value.toString().split(' ')[1] : '';

    return (
        <div className=" col-span-6 sm:col-span-3">
            <label
                htmlFor="endMonth"
                className="block text-sm font-medium text-gray-700"
            >
                End Date
            </label>

            <div className=" grid grid-cols-2 gap-2 col-span-6 sm:col-span-3">
                <select
                    id="endMonth"
                    name="endMonth"
                    className="mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                    defaultValue={month}
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
                    id="endYear"
                    name="endYear"
                    className="mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                    defaultValue={year}
                >
                    {/* TODO: Check whether this System Works */}
                    <option selected disabled hidden>
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

export const CredentialID: React.FC<ValueProps> = ({ value }: ValueProps) => {
    return (
        <div className="col-span-6">
            <label
                htmlFor="credentialId"
                className="block text-sm font-medium text-gray-700"
            >
                CredentialID
            </label>
            <input
                type="text"
                name="credentialId"
                id="credentialId"
                className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                defaultValue={value}
            />
        </div>
    );
};

export const CredentialUrl: React.FC<ValueProps> = ({ value }: ValueProps) => {
    return (
        <div className="col-span-6">
            <label
                htmlFor="credentialUrl"
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
                    name="credentialUrl"
                    id="credentialUrl"
                    className="focus:ring-indigo-500 focus:border-indigo-500 flex-1 block w-full rounded-none rounded-r-md sm:text-sm border-gray-300"
                    placeholder="www.example.com"
                    defaultValue={value}
                />
            </div>
        </div>
    );
};
