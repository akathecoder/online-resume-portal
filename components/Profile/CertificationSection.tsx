import { UserIcon } from '@heroicons/react/outline';
import React from 'react';
import { CertificationData } from '../../utilities/profileDataTypes';

interface CertificationGridItemProps {
    name: string;
    organization: string;
    startDate: string;
    endDate: string;
    credentialID: string;
    credentialUrl: string;
}

const CertificationGridItem: React.FC<CertificationGridItemProps> = ({
    name,
    organization,
    startDate,
    endDate,
    credentialUrl,
}: CertificationGridItemProps) => {
    return (
        <div className="ml-4 mr-10 my-6">
            <div className="grid grid-cols-9">
                <div className="col-span-7">
                    <h1 className="text-base font-semibold">{name}</h1>
                    <h2 className="">{organization}</h2>
                </div>
                <div className="col-span-2 text-right">
                    <span>{startDate}</span> - <span>{endDate}</span>
                </div>
            </div>
            <a className="mt-3 leading-6 font-semibold" href={credentialUrl}>
                See Credentials
            </a>
        </div>
    );
};

interface CertificationSectionProps {
    data: Array<CertificationData>;
}

const CertificationSection: React.FC<CertificationSectionProps> = ({
    data,
}: CertificationSectionProps) => {
    return (
        <div className="bg-white px-3 py-4 shadow-sm rounded-sm">
            <div className="flex items-center space-x-2 font-semibold text-gray-900 leading-8 my-3 ml-2">
                <UserIcon className="w-5 h-5 text-blue-500" />
                <span className="tracking-wide text-xl ml-2">
                    Licences & Certification
                </span>
            </div>

            <div className="text-gray-700 px-2">
                <div className="text-sm">
                    {data.map((value, index) => {
                        return (
                            <div key={value.key}>
                                {index > 0 && (
                                    <hr className="mx-4 border-gray-300" />
                                )}
                                <CertificationGridItem
                                    name={value.name}
                                    organization={value.organization}
                                    startDate={value.startDate}
                                    endDate={value.endDate}
                                    credentialID={value.credentialID}
                                    credentialUrl={value.credentialUrl}
                                />
                            </div>
                        );
                    })}
                </div>
            </div>
        </div>
    );
};

export default CertificationSection;
