import { UserIcon } from '@heroicons/react/outline';
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

const AboutSection: React.FC = () => {
    return (
        <div className="bg-white px-3 py-4 shadow-sm rounded-sm">
            <div className="flex items-center space-x-2 font-semibold text-gray-900 leading-8 my-3 ml-2">
                <UserIcon className="w-5 h-5 text-blue-500" />
                <span className="tracking-wide text-xl ml-2">About</span>
            </div>

            <div className="text-gray-700 px-2">
                <div className="grid md:grid-cols-2 text-sm">
                    <InfoGridItem
                        title="Email"
                        detail="testmail@gmail.com"
                        link="testmail@gmail.com"
                    />

                    <InfoGridItem
                        title="Phone Number"
                        detail="+91-9876543210"
                    />

                    <InfoGridItem
                        title="Portfolio"
                        detail="portfolio.xyz"
                        link="https://portfolio.xyz/"
                    />

                    <InfoGridItem
                        title="GitHub"
                        detail="username"
                        link="https://github.com/username/"
                    />

                    <InfoGridItem
                        title="LinkedIn"
                        detail="username"
                        link="https://linkedin.com/in/username/"
                    />

                    <InfoGridItem
                        title="Blog"
                        detail="blog.portfolio.xyz"
                        link="https://blog.portfolio.xyz/"
                    />
                </div>
            </div>
        </div>
    );
};

export default AboutSection;
