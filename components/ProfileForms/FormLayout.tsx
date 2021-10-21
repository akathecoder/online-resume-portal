import React from 'react';
import {
    FormDivider,
    SaveButton,
    Heading,
    AddCardButton,
} from './GeneralFormComps';

interface FormLayoutProps {
    heading: string;
    description?: string;
    children?: React.ReactNode;
    addCardButton?: boolean;
    onAddCardButtonClick?: (
        event: React.MouseEvent<HTMLButtonElement, MouseEvent>,
    ) => void;
}

const FormLayout: React.FC<FormLayoutProps> = ({
    heading,
    description,
    children,
    addCardButton,
    onAddCardButtonClick,
}: FormLayoutProps) => {
    return (
        <>
            <div className="md:grid md:grid-cols-3 md:gap-6 ">
                <Heading title={heading} description={description} />
                <div className="mt-5 md:mt-0 md:col-span-2 grid grid-cols-1 gap-6">
                    {children}
                    {addCardButton && onAddCardButtonClick && (
                        <AddCardButton onClick={onAddCardButtonClick} />
                    )}
                </div>
            </div>

            <FormDivider />
        </>
    );
};

export default FormLayout;
