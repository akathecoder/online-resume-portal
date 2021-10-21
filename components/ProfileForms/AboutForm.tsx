import React, { useState } from 'react';
import { Link, Name, Title } from './AboutFormComps';
import FormCard from './FormCard';
import FormLayout from './FormLayout';

const AboutForm: React.FC = () => {
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
            heading="About"
            description="This information will be displayed publicly so be careful what you share."
            addCardButton
            onAddCardButtonClick={handleAddCard}
        >
            {data.map((value) => (
                <FormCard key={value} onSubmit={handleSubmit}>
                    <Name />
                    <Title />
                    <Link />
                </FormCard>
            ))}
        </FormLayout>
    );
};

export default AboutForm;
