import { UserProfile } from '@auth0/nextjs-auth0';
import React, { useEffect, useState } from 'react';
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
import { ExperienceData } from '../../utilities/profileDataTypes';
import { v4 as uuidv4 } from 'uuid';
import { getExperience, setExperience } from '@utilities/dataFunctions';
import { deleteExperience } from '@utilities/deleteDataFunctions';

interface ExperienceFormProps {
    user: UserProfile | undefined;
}

const ExperienceForm: React.FC<ExperienceFormProps> = ({
    user,
}: ExperienceFormProps) => {
    const [data, setData] = useState<Array<ExperienceData>>([]);

    useEffect(() => {
        user &&
            user.email &&
            getExperience(user.email).then((data) => {
                setData(data);
            });
    }, []);

    const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();

        if (user && user.email) {
            await setExperience(
                user.email,
                event.currentTarget.detailId.value,
                {
                    key: event.currentTarget.detailId.value,
                    companyName: event.currentTarget.companyName.value,
                    position: event.currentTarget.position.value,
                    place: event.currentTarget.place.value,
                    startDate: `${event.currentTarget.startMonth.value} ${event.currentTarget.startYear.value}`,
                    endDate: `${event.currentTarget.endMonth.value} ${event.currentTarget.endYear.value}`,
                    details: event.currentTarget.details.value,
                } as ExperienceData,
            );
            alert('Data Updated');
        } else {
            alert('User Error');
        }
    };

    const handleAddCard = (
        event: React.MouseEvent<HTMLButtonElement, MouseEvent>,
    ) => {
        setData([
            ...data,
            {
                key: uuidv4(),
            } as ExperienceData,
        ]);
    };

    const handleDelete = async (id: string) => {
        if (user && user.email) {
            await deleteExperience(user.email, id);
            setData(data.filter((value) => value.key !== id));
            alert('Data Deleted');
        } else {
            alert('User Error');
        }
    };

    return (
        <FormLayout
            heading="Experience"
            description="This information will be displayed publicly so be careful what you share."
            addCardButton
            onAddCardButtonClick={handleAddCard}
        >
            {data.map((value) => (
                <FormCard
                    key={value.key}
                    id={value.key}
                    onSubmit={handleSubmit}
                    onDelete={handleDelete}
                >
                    <CompanyName value={value.companyName} />
                    <Position value={value.position} />
                    <Place value={value.place} />
                    <StartDate value={value.startDate} />
                    <EndDate value={value.endDate} />
                    <Details value={value.details} />
                </FormCard>
            ))}
        </FormLayout>
    );
};

export default ExperienceForm;
