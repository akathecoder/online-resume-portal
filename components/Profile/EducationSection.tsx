import { UserIcon } from '@heroicons/react/outline';
import React from 'react';

interface EducationGridItemProps {
    school: string;
    degree: string;
    fieldOfStudy: string;
    grade: number;
    startDate: string;
    endDate: string;
    details: string;
}

const EducationGridItem: React.FC<EducationGridItemProps> = ({
    school,
    degree,
    fieldOfStudy,
    grade,
    startDate,
    endDate,
    details,
}: EducationGridItemProps) => {
    return (
        <div className="ml-4 mr-10 my-6">
            <div className="grid grid-cols-9">
                <div className="col-span-7">
                    <h1 className="text-base font-semibold">{school}</h1>
                    <h2 className="">
                        {degree}, {fieldOfStudy}, {grade}
                    </h2>
                </div>
                <div className="col-span-2 text-right">
                    <span>{startDate}</span> - <span>{endDate}</span>
                </div>
            </div>
            <p className="mt-3 leading-6">{details}</p>
        </div>
    );
};
const EducationSection: React.FC = () => {
    return (
        <div className="bg-white px-3 py-4 shadow-sm rounded-sm">
            <div className="flex items-center space-x-2 font-semibold text-gray-900 leading-8 my-3 ml-2">
                <UserIcon className="w-5 h-5 text-blue-500" />
                <span className="tracking-wide text-xl ml-2">Education</span>
            </div>

            <div className="text-gray-700 px-2">
                <div className="text-sm">
                    {[1, 2].map((value, index) => {
                        return (
                            <>
                                {index > 0 && (
                                    <hr className="mx-4 border-gray-300" />
                                )}
                                <EducationGridItem
                                    school="University of Technology"
                                    degree="Bachelor of Technology - BTech"
                                    fieldOfStudy="Computer Science"
                                    grade={8.89}
                                    startDate="May 2021"
                                    endDate="August 2021"
                                    details="Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem, nulla dolore accusantium totam blanditiis adipisci laborum fugit, repudiandae quibusdam accusamus delectus commodi? Corrupti expedita exercitationem suscipit, iste optio obcaecati dolores ab atque pariatur molestiae nulla harum cumque! Nemo sit unde architecto perspiciatis? Eligendi debitis tempora nobis nulla expedita magni ad, ducimus consectetur, incidunt alias vero voluptatem molestiae minus accusamus delectus commodi?"
                                />
                            </>
                        );
                    })}
                </div>
            </div>
        </div>
    );
};

export default EducationSection;
