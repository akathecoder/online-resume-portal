import { UserIcon } from '@heroicons/react/outline';
import React from 'react';

interface SkillGridItemProps {
    name: string;
}

const SkillGridItem: React.FC<SkillGridItemProps> = ({
    name,
}: SkillGridItemProps) => {
    return (
        <div className="ml-4 mr-10 my-6">
            <h1 className="text-base font-semibold col-span-1 block">{name}</h1>
        </div>
    );
};

const SkillsSection: React.FC = () => {
    return (
        <div className="bg-white px-3 py-4 shadow-sm rounded-sm">
            <div className="flex items-center space-x-2 font-semibold text-gray-900 leading-8 my-3 ml-2">
                <UserIcon className="w-5 h-5 text-blue-500" />
                <span className="tracking-wide text-xl ml-2">Skills</span>
            </div>

            <div className="text-gray-700 px-2">
                <div className="text-sm grid grid-cols-9">
                    {[1, 2, 3, 4, 5, 6, 7, 8, 9, 1, 2, 3, 4, 5, 6, 7, 8, 9].map(
                        (value, index) => {
                            return (
                                <>
                                    <SkillGridItem name="React JS" />
                                </>
                            );
                        },
                    )}
                </div>
            </div>
        </div>
    );
};

export default SkillsSection;
