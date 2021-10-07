import React from 'react';
import Image from 'next/image';
import InfoCard from './InfoCard';

interface ProfileCardProps {
    image: string;
    name: string;
    tagline?: string;
    bio?: string;
    status: 'student' | 'graduated';
    graduationDate?: string;
    branch?: string;
    degree?: string;
}

const ProfileCard: React.FC<ProfileCardProps> = ({
    name,
    tagline,
    bio,
    image,
    status,
    graduationDate,
    branch,
    degree,
}: ProfileCardProps) => {
    return (
        <div className="p-2">
            <div className="overflow-hidden relative h-96 w-96">
                <Image src={image} layout="fill" objectFit="cover" />
            </div>

            <h1 className="text-gray-900 font-bold text-2xl leading-8 my-2">
                {name}
            </h1>
            <h3 className="text-gray-600 font-lg text-semibold leading-6 text-lg my-1">
                {tagline}
            </h3>
            <p className="text-base text-gray-500 hover:text-gray-600 leading-6 my-1">
                {bio}
            </p>

            <ul className=" bg-gray-100 text-gray-600 hover:text-gray-700 hover:shadow py-2 px-3 mt-3 divide-y rounded shadow-sm">
                <InfoCard title="Status">
                    <span className="ml-auto">
                        <span
                            className={
                                'py-1 px-2 rounded text-white text-sm ' +
                                (status === 'student'
                                    ? ' bg-green-500 '
                                    : ' bg-red-500 ')
                            }
                        >
                            {status === 'student' ? 'Student' : 'Graduated'}
                        </span>
                    </span>
                </InfoCard>

                <InfoCard title="Degree" information={degree} />

                <InfoCard title="Branch" information={branch} />

                <InfoCard
                    title="Graduation Date"
                    information={graduationDate}
                />
            </ul>
        </div>
    );
};

export default ProfileCard;
