import React from 'react';

interface ValueProps {
    value: string | number | undefined;
}

export const CompanyName: React.FC<ValueProps> = ({ value }: ValueProps) => {
    return (
        <div className="col-span-6">
            <label
                htmlFor="companyName"
                className="block text-sm font-medium text-gray-700"
            >
                Company Name
            </label>
            <input
                type="text"
                name="companyName"
                id="companyName"
                className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                defaultValue={value}
            />
        </div>
    );
};

export const Position: React.FC<ValueProps> = ({ value }: ValueProps) => {
    return (
        <div className="col-span-6 sm:col-span-3">
            <label
                htmlFor="position"
                className="block text-sm font-medium text-gray-700"
            >
                Position
            </label>
            <input
                type="text"
                name="position"
                id="position"
                className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                defaultValue={value}
            />
        </div>
    );
};

export const Place: React.FC<ValueProps> = ({ value }: ValueProps) => {
    return (
        <div className="col-span-6 sm:col-span-3">
            <label
                htmlFor="place"
                className="block text-sm font-medium text-gray-700"
            >
                Place
            </label>
            <input
                type="text"
                name="place"
                id="place"
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

export const Details: React.FC<ValueProps> = ({ value }: ValueProps) => {
    return (
        <div className="col-span-6">
            <label
                htmlFor="details"
                className="block text-sm font-medium text-gray-700"
            >
                Details
            </label>
            <div className="mt-1">
                <textarea
                    id="details"
                    name="details"
                    rows={3}
                    className="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 mt-1 block w-full sm:text-sm border border-gray-300 rounded-md"
                    defaultValue={value}
                />
            </div>
        </div>
    );
};
