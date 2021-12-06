import { uploadProfilePic } from '@utilities/storageFunctions';
import React, { useEffect, useState } from 'react';

interface ValueProps {
    value: string | undefined;
    setValue: React.Dispatch<React.SetStateAction<string | undefined>>;
}
export const ProfilePhoto: React.FC<ValueProps> = ({
    value,
    setValue,
}: ValueProps) => {
    return (
        <div className="col-span-6">
            <label className="block text-sm font-medium text-gray-700">
                Profile Photo
            </label>
            <div className="mt-1 flex items-center">
                <span className="inline-block h-12 w-12 rounded-full overflow-hidden bg-gray-100">
                    {value ? (
                        <img src={value} alt="" />
                    ) : (
                        <svg
                            className="h-full w-full text-gray-300"
                            fill="currentColor"
                            viewBox="0 0 24 24"
                        >
                            <path d="M24 20.993V24H0v-2.996A14.977 14.977 0 0112.004 15c4.904 0 9.26 2.354 11.996 5.993zM16.002 8.999a4 4 0 11-8 0 4 4 0 018 0z" />
                        </svg>
                    )}
                </span>

                <label htmlFor="profile-photo">
                    <div className="ml-5 bg-white py-2 px-3 border border-gray-300 rounded-md shadow-sm text-sm leading-4 font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 cursor-pointer">
                        Change
                    </div>
                </label>

                <input
                    type="file"
                    accept="image/*"
                    name="profile-photo"
                    id="profile-photo"
                    className="hidden"
                    onChange={(e) => {
                        console.log(e.currentTarget.files![0]);
                        uploadProfilePic(e.currentTarget.files![0]).then(
                            (downloadUrl) => {
                                setValue(downloadUrl);
                            },
                        );
                    }}
                />
            </div>
        </div>
    );
};

export const Name: React.FC<ValueProps> = ({ value, setValue }: ValueProps) => {
    return (
        <div className="col-span-6 sm:col-span-3">
            <label
                htmlFor="full-name"
                className="block text-sm font-medium text-gray-700"
            >
                Full Name
            </label>
            <input
                type="text"
                name="full-name"
                id="full-name"
                value={value}
                onChange={(e) => {
                    setValue(e.currentTarget.value);
                }}
                className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
            />
        </div>
    );
};

export const Position: React.FC<ValueProps> = ({
    value,
    setValue,
}: ValueProps) => {
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
                value={value}
                onChange={(e) => {
                    setValue(e.currentTarget.value);
                }}
                className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
            />
        </div>
    );
};

export const About: React.FC<ValueProps> = ({
    value,
    setValue,
}: ValueProps) => {
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
                    value={value}
                    onChange={(e) => {
                        setValue(e.currentTarget.value);
                    }}
                />
            </div>
            <p className="mt-2 text-sm text-gray-500">
                Brief description for your profile. URLs are hyperlinked.
            </p>
        </div>
    );
};

export const Status: React.FC<ValueProps> = ({
    value,
    setValue,
}: ValueProps) => {
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
                value={value}
                onChange={(e) => {
                    setValue(e.currentTarget.value);
                }}
                className="mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            >
                <option value="student">Student</option>
                <option value="graduation">Graduation</option>
            </select>
        </div>
    );
};

export const GraduationDate: React.FC<ValueProps> = ({
    value,
    setValue,
}: ValueProps) => {
    const [month, setMonth] = useState<string>();
    const [year, setYear] = useState<string>();

    useEffect(() => {
        value && setMonth(value.split(' ')[0]);
        value && setYear(value.split(' ')[1]);
    }, []);

    useEffect(() => {
        setValue(`${month} ${year}`);
    }, [year, month]);

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
                    value={month}
                    onChange={(e) => {
                        setMonth(e.currentTarget.value);
                    }}
                    className="mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
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
                    id="graduation-year"
                    name="graduation-year"
                    value={year}
                    onChange={(e) => {
                        setYear(e.currentTarget.value);
                    }}
                    className="mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
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

export const Degree: React.FC<ValueProps> = ({
    value,
    setValue,
}: ValueProps) => {
    return (
        <div className="col-span-6 sm:col-span-3">
            <label
                htmlFor="degree"
                className="block text-sm font-medium text-gray-700"
            >
                Degree
            </label>
            <input
                type="text"
                name="degree"
                id="degree"
                value={value}
                onChange={(e) => {
                    setValue(e.currentTarget.value);
                }}
                className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
            />
        </div>
    );
};

export const Branch: React.FC<ValueProps> = ({
    value,
    setValue,
}: ValueProps) => {
    return (
        <div className="col-span-6 sm:col-span-3">
            <label
                htmlFor="branch"
                className="block text-sm font-medium text-gray-700"
            >
                Branch
            </label>
            <input
                type="text"
                name="branch"
                id="branch"
                value={value}
                onChange={(e) => {
                    setValue(e.currentTarget.value);
                }}
                className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
            />
        </div>
    );
};
