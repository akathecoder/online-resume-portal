import React, { useEffect, useState } from 'react';
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
import { EducationData } from '@utilities/profileDataTypes';
import { v4 as uuidv4 } from 'uuid';
import { UserProfile } from '@auth0/nextjs-auth0';
import { getEducation, setEducation } from '@utilities/dataFunctions';
import { deleteEducation } from '@utilities/deleteDataFunctions';

interface EducationFormProps {
    user: UserProfile | undefined;
}

const EducationForm: React.FC<EducationFormProps> = ({
    user,
}: EducationFormProps) => {
    const [data, setData] = useState<Array<EducationData>>([]);

    useEffect(() => {
        user &&
            user.email &&
            getEducation(user.email).then((data) => {
                setData(data);
            });
    }, []);

    const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();

        if (user && user.email) {
            await setEducation(user.email, event.currentTarget.detailId.value, {
                key: event.currentTarget.detailId.value,
                school: event.currentTarget.schoolName.value,
                degree: event.currentTarget.degree.value,
                fieldOfStudy: event.currentTarget.fieldOfStudy.value,
                grade: event.currentTarget.grade.value,
                details: event.currentTarget.details.value,
                startDate: `${event.currentTarget.startMonth.value} ${event.currentTarget.startYear.value}`,
                endDate: `${event.currentTarget.endMonth.value} ${event.currentTarget.endYear.value}`,
            } as EducationData);
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
            } as EducationData,
        ]);
    };

    const handleDelete = async (id: string) => {
        if (user && user.email) {
            await deleteEducation(user.email, id);
            setData(data.filter((value) => value.key !== id));
            alert('Data Deleted');
        } else {
            alert('User Error');
        }
    };

    return (
        <FormLayout
            heading="Education"
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
                    <SchoolName value={value.school} />
                    <Degree value={value.degree} />
                    <FieldOfStudy value={value.fieldOfStudy} />
                    <Grade value={value.grade} />
                    <StartDate value={value.startDate} />
                    <EndDate value={value.endDate} />
                    <Details value={value.details} />
                </FormCard>
            ))}
        </FormLayout>
    );
};

export default EducationForm;
