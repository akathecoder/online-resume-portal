import React from 'react';
import FormCard from './FormCard';
import FormLayout from './FormLayout';
import {
    About,
    Branch,
    Degree,
    GraduationDate,
    Name,
    Position,
    ProfilePhoto,
    Status,
} from './ProfileCardFormComps';

const ProfileCardForm: React.FC = () => {
    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
    };

    return (
        <FormLayout
            heading="Profile"
            description="This information will be displayed publicly so be careful what you share."
        >
            <FormCard onSubmit={handleSubmit}>
                <ProfilePhoto />
                <Name />
                <Position />
                <About />
                <Status />
                <GraduationDate />
                <Degree />
                <Branch />
            </FormCard>
        </FormLayout>
    );
};

export default ProfileCardForm;
