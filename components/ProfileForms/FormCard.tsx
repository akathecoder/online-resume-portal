import React from 'react';
import { DeleteButton, SaveButton } from './GeneralFormComps';

interface FormCardProps {
    id?: string;
    children: React.ReactNode;
    onSubmit: (event: React.FormEvent<HTMLFormElement>) => void;
    onDelete: (
        event: React.MouseEvent<HTMLButtonElement, MouseEvent>,
    ) => Promise<void>;
}

const FormCard: React.FC<FormCardProps> = ({
    id,
    children,
    onSubmit,
    onDelete,
}: FormCardProps) => {
    return (
        <form onSubmit={onSubmit}>
            <input
                type="text"
                name="detailId"
                id="detailId"
                value={id}
                hidden
                readOnly
            />

            <div className="shadow sm:rounded-md sm:overflow-hidden">
                <div className="px-4 py-5 bg-white space-y-6 sm:p-6 ">
                    <div className="grid grid-cols-6 gap-6">{children}</div>
                </div>

                <div className="px-4 py-3 bg-gray-50 text-right sm:px-6 gap-4 flex justify-end">
                    <DeleteButton onDelete={onDelete} />
                    <SaveButton />
                </div>
            </div>
        </form>
    );
};

export default FormCard;
