import React, { useState } from 'react';
import {
    CompanyName,
    Details,
    EndDate,
    Place,
    Position,
    StartDate,
} from './ExperienceFormComps';
import FormCard from './FormCard';
import FormLayout from './FormLayout';

const ExperienceForm: React.FC = () => {
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
            heading="Experience"
            description="This information will be displayed publicly so be careful what you share."
            addCardButton
            onAddCardButtonClick={handleAddCard}
        >
            {data.map((value) => (
                <FormCard key={value} onSubmit={handleSubmit}>
                    <CompanyName />
                    <Position />
                    <Place />
                    <StartDate />
                    <EndDate />
                    <Details />
                </FormCard>
            ))}
        </FormLayout>
    );
};

export default ExperienceForm;
