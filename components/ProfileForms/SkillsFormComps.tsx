import { PlusIcon, XIcon } from '@heroicons/react/outline';
import React from 'react';
import { SkillsData } from '../../utilities/profileDataTypes';

interface SkillBoxProps {
    data: SkillsData;
    onChange: (event: React.ChangeEvent<HTMLInputElement>, key: string) => void;
    onDelete: (key: string, value: string) => void;
}

export const SkillBox: React.FC<SkillBoxProps> = ({
    data,
    onChange: handleChange,
    onDelete: handleDelete,
}: SkillBoxProps) => {
    return (
        <div className="col-span-6 flex rounded-md shadow-sm">
            <input
                type="text"
                name="skill"
                id="skill"
                className="focus:ring-indigo-500 focus:border-indigo-500 flex-1 block w-full rounded-none rounded-l-md sm:text-sm border-gray-300"
                placeholder="Web Development"
                value={data.name}
                onChange={(e) => handleChange(e, data.key)}
            />
            <span
                className="inline-flex items-center px-3 rounded-r-md border border-l-0 border-gray-300 bg-gray-50 text-gray-500 text-sm cursor-pointer"
                onClick={(e) => handleDelete(data.key, data.name)}
            >
                <XIcon className="w-5 h-5" />
            </span>
        </div>
    );
};

interface AddButtonProps {
    onClick: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
}

export const AddButton: React.FC<AddButtonProps> = ({
    onClick: handleClick,
}: AddButtonProps) => {
    return (
        <button
            type="button"
            className="mt-1 flex justify-center py-2 border-2 border-gray-300 border-dashed rounded-md text-center cursor-pointer hover:shadow-sm flex-1"
            onClick={handleClick}
        >
            <PlusIcon className="w-5 h-5" />
            <p className="text-sm text-gray-600 ml-1 my-auto">
                Add a new Skill
            </p>
        </button>
    );
};
