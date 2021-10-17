import { UserIcon } from '@heroicons/react/outline';
import { AboutData } from '@utilities/profileDataTypes';
import React from 'react';

interface InfoGridItemProps {
    title: string;
    detail: string;
    link?: string;
}

const InfoGridItem: React.FC<InfoGridItemProps> = ({
    title,
    detail,
    link,
}: InfoGridItemProps) => {
    return (
        <div className="grid grid-cols-7">
            <div className="px-4 py-2 font-semibold col-span-3">{title}</div>
            <div className="px-4 py-2 col-span-4">
                {link ? (
                    <a className="text-grey-800" href={link}>
                        {detail}
                    </a>
                ) : (
                    detail
                )}
            </div>
        </div>
    );
};

interface AboutSectionProps {
    data: Array<AboutData>;
}

const AboutSection: React.FC<AboutSectionProps> = ({
    data,
}: AboutSectionProps) => {
    return (
        <div className="bg-white px-3 py-4 shadow-sm rounded-sm">
            <div className="flex items-center space-x-2 font-semibold text-gray-900 leading-8 my-3 ml-2">
                <UserIcon className="w-5 h-5 text-blue-500" />
                <span className="tracking-wide text-xl ml-2">About</span>
            </div>

            <div className="text-gray-700 px-2">
                <div className="grid md:grid-cols-2 text-sm">
                    {data
                        .sort((a, b) => a.key - b.key)
                        .map((value) => (
                            <InfoGridItem
                                key={value.key}
                                title={value.title}
                                detail={value.detail}
                                link={value.link}
                            />
                        ))}
                </div>
            </div>
        </div>
    );
};

export default AboutSection;
