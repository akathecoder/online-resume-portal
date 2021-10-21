import React from 'react';
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

const EducationForm: React.FC = () => {
    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
    };

    return (
        <FormLayout
            heading="Education"
            description="This information will be displayed publicly so be careful what you share."
            onSubmit={handleSubmit}
        >
            <SchoolName />
            <Degree />
            <FieldOfStudy />
            <Grade />
            <StartDate />
            <EndDate />
            <Details />
        </FormLayout>
    );
};

export default EducationForm;
