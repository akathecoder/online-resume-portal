import React, { useState } from 'react';
import FormCard from './FormCard';
import FormLayout from './FormLayout';
import { SkillBox } from './SkillsFormComps';

const SkillsForm: React.FC = () => {
    const [data, setData] = useState([1, 2, 3]);

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
            heading="Skills"
            description="This information will be displayed publicly so be careful what you share."
        >
            <FormCard onSubmit={handleSubmit}>
                {data.map((skill) => (
                    <SkillBox />
                ))}
            </FormCard>
        </FormLayout>
    );
};

export default SkillsForm;
