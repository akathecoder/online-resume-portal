import React from 'react';
import { FormDivider, SaveButton, Heading } from './GeneralFormComps';

interface FormLayoutProps {
    heading: string;
    description?: string;
    children?: React.ReactNode;
}

const FormLayout: React.FC<FormLayoutProps> = ({
    heading,
    description,
    children,
}: FormLayoutProps) => {
    return (
        <>
            <div>
                <div className="md:grid md:grid-cols-3 md:gap-6 ">
                    <Heading title={heading} description={description} />
                    <div className="mt-5 md:mt-0 md:col-span-2 grid grid-cols-1 gap-6">
                        {children}
                    </div>
                </div>
            </div>

            <FormDivider />
        </>
    );
};

export default FormLayout;
