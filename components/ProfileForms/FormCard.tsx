import React from 'react';
import { SaveButton } from './GeneralFormComps';

interface FormCardProps {
    children: React.ReactNode;
    onSubmit: (event: React.FormEvent<HTMLFormElement>) => void;
}

const FormCard: React.FC<FormCardProps> = ({
    children,
    onSubmit,
}: FormCardProps) => {
    return (
        <form onSubmit={onSubmit}>
            <div className="shadow sm:rounded-md sm:overflow-hidden">
                <div className="px-4 py-5 bg-white space-y-6 sm:p-6 ">
                    <div className="grid grid-cols-6 gap-6">{children}</div>
                </div>
                <div className="px-4 py-3 bg-gray-50 text-right sm:px-6">
                    <SaveButton />
                </div>
            </div>
        </form>
    );
};

export default FormCard;
