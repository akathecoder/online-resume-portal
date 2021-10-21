import React, { useState } from 'react';
import {
    Degree,
    Details,
    EndDate,
    FieldOfStudy,
    Grade,
    SchoolName,
    StartDate,
} from './EducationFormComps';
import FormLayout from './FormLayout';
import FormCard from './FormCard';

const EducationForm: React.FC = () => {
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
            heading="Education"
            description="This information will be displayed publicly so be careful what you share."
            addCardButton
            onAddCardButtonClick={handleAddCard}
        >
            {data.map((value) => (
                <FormCard key={value} onSubmit={handleSubmit}>
                    <SchoolName />
                    <Degree />
                    <FieldOfStudy />
                    <Grade />
                    <StartDate />
                    <EndDate />
                    <Details />
                </FormCard>
            ))}
        </FormLayout>
    );
};

export default EducationForm;
