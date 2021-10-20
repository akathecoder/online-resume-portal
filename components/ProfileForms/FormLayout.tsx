import React from 'react';
import { FormDivider, SaveButton, Heading } from './GeneralFormComps';

interface FormLayoutProps {
    heading: string;
    description?: string;
    children?: React.ReactNode;
    onSubmit: (event: React.FormEvent<HTMLFormElement>) => void;
}

const FormLayout: React.FC<FormLayoutProps> = ({
    heading,
    description,
    children,
    onSubmit,
}: FormLayoutProps) => {
    return (
        <>
            <div>
                <div className="md:grid md:grid-cols-3 md:gap-6">
                    <Heading title={heading} description={description} />

                    <div className="mt-5 md:mt-0 md:col-span-2">
                        <form onSubmit={onSubmit}>
                            <div className="shadow sm:rounded-md sm:overflow-hidden">
                                <div className="px-4 py-5 bg-white space-y-6 sm:p-6 ">
                                    <div className="grid grid-cols-6 gap-6">
                                        {children}
                                    </div>
                                </div>
                                <div className="px-4 py-3 bg-gray-50 text-right sm:px-6">
                                    <SaveButton />
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>

            <FormDivider />
        </>
    );
};

export default FormLayout;
