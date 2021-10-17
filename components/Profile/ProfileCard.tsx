import React from 'react';
import Image from 'next/image';
import InfoCard from './InfoCard';
import { ProfileData } from '../../utilities/profileDataTypes';

interface ProfileCardProps {
    data: ProfileData;
}

const ProfileCard: React.FC<ProfileCardProps> = ({
    data,
}: ProfileCardProps) => {
    return (
        <div className="bg-white p-2 border-t-4 border-green-400 w-96 sticky top-24">
            <div className="overflow-hidden">
                <div className="relative h-96 w-96">
                    <Image src={data.image} layout="fill" objectFit="cover" />
                </div>
            </div>

            <h1 className="text-gray-900 font-bold text-2xl leading-8 my-2">
                {data.name}
            </h1>
            <h3 className="text-gray-600 font-lg text-semibold leading-6 text-lg my-1">
                {data.tagline}
            </h3>
            <p className="text-base text-gray-500 hover:text-gray-600 leading-6 my-1">
                {data.bio}
            </p>

            <ul className=" bg-gray-100 text-gray-600 hover:text-gray-700 hover:shadow py-2 px-3 mt-3 divide-y rounded shadow-sm">
                <InfoCard title="Status">
                    <span className="ml-auto">
                        <span
                            className={
                                'py-1 px-2 rounded text-white text-sm ' +
                                (data.status === 'student'
                                    ? ' bg-green-500 '
                                    : ' bg-red-500 ')
                            }
                        >
                            {data.status === 'student'
                                ? 'Student'
                                : 'Graduated'}
                        </span>
                    </span>
                </InfoCard>

                <InfoCard title="Degree" information={data.degree} />

                <InfoCard title="Branch" information={data.branch} />

                <InfoCard
                    title="Graduation Date"
                    information={data.graduationDate}
                />
            </ul>
        </div>
    );
};

export default ProfileCard;
