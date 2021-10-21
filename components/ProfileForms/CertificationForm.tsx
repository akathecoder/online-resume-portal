import React, { useState } from 'react';
import {
    CredentialID,
    CredentialUrl,
    EndDate,
    Name,
    Organization,
    StartDate,
} from './CertificationFormComps';
import FormCard from './FormCard';
import FormLayout from './FormLayout';

const CertificationForm: React.FC = () => {
    const [data, setData] = useState([1]);

    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
    };

    const handleAddCard = (
        event: React.MouseEvent<HTMLButtonElement, MouseEvent>,
    ) => {
        setData([...data, data.length + 1]);
    };

    return (
        <FormLayout
            heading="Licenses & Certification"
            description="This information will be displayed publicly so be careful what you share."
            addCardButton
            onAddCardButtonClick={handleAddCard}
        >
            {data.map((value) => (
                <FormCard key={value} onSubmit={handleSubmit}>
                    <Name />
                    <Organization />
                    <StartDate />
                    <EndDate />
                    <CredentialID />
                    <CredentialUrl />
                </FormCard>
            ))}
        </FormLayout>
    );
};

export default CertificationForm;
