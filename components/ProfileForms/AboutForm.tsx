import React, { useEffect, useState } from 'react';
import { Link, Name, Title } from './AboutFormComps';
import FormCard from './FormCard';
import FormLayout from './FormLayout';
import { AboutData } from '../../utilities/profileDataTypes';
import { UserProfile } from '@auth0/nextjs-auth0';
import { getAbout, setAbout } from '@utilities/dataFunctions';
import { v4 as uuidv4 } from 'uuid';

interface AboutFormProps {
    user: UserProfile | undefined;
}

const AboutForm: React.FC<AboutFormProps> = ({ user }: AboutFormProps) => {
    const [data, setData] = useState<Array<AboutData>>([]);

    useEffect(() => {
        user &&
            user.email &&
            getAbout(user.email).then((data) => {
                setData(data);
            });
    }, []);

    const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();

        if (user && user.email) {
            await setAbout(user.email, event.currentTarget.detailId.value, {
                key: event.currentTarget.detailId.value,
                title: event.currentTarget.detailName.value,
                detail: event.currentTarget.detailTitle.value,
                link: event.currentTarget.detailLink.value,
            } as AboutData);
            alert('Data Updated');
        } else {
            alert('User Error');
        }
    };

    const handleAddCard = (
        event: React.MouseEvent<HTMLButtonElement, MouseEvent>,
    ) => {
        setData([...data, { key: uuidv4() } as AboutData]);
    };

    const handleDelete = async (
        event: React.MouseEvent<HTMLButtonElement, MouseEvent>,
    ) => {};

    return (
        <FormLayout
            heading="About"
            description="This information will be displayed publicly so be careful what you share."
            addCardButton
            onAddCardButtonClick={handleAddCard}
        >
            {data.map((value) => {
                return (
                    <FormCard
                        key={value.key}
                        id={value.key}
                        onSubmit={handleSubmit}
                        onDelete={handleDelete}
                    >
                        <Name value={value.title} />
                        <Title value={value.detail} />
                        <Link value={value.link} />
                    </FormCard>
                );
            })}
        </FormLayout>
    );
};

export default AboutForm;
