import { UserProfile } from '@auth0/nextjs-auth0';
import React, { useEffect, useState } from 'react';
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
import { CertificationData } from '../../utilities/profileDataTypes';
import { v4 as uuidv4 } from 'uuid';
import { getCertification, setCertification } from '@utilities/dataFunctions';
import { deleteCertification } from '@utilities/deleteDataFunctions';

interface CertificationFormProps {
    user: UserProfile | undefined;
}

const CertificationForm: React.FC<CertificationFormProps> = ({
    user,
}: CertificationFormProps) => {
    const [data, setData] = useState<Array<CertificationData>>([]);

    useEffect(() => {
        user &&
            user.email &&
            getCertification(user.email).then((data) => {
                setData(data);
            });
    }, []);

    const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();

        if (user && user.email) {
            await setCertification(
                user.email,
                event.currentTarget.detailId.value,
                {
                    key: event.currentTarget.detailId.value,
                    name: event.currentTarget.certificationName.value,
                    organization: event.currentTarget.organization.value,
                    startDate: `${event.currentTarget.startMonth.value} ${event.currentTarget.startYear.value}`,
                    endDate: `${event.currentTarget.endMonth.value} ${event.currentTarget.endYear.value}`,
                    credentialID: event.currentTarget.credentialId.value,
                    credentialUrl: event.currentTarget.credentialUrl.value,
                } as CertificationData,
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
            } as CertificationData,
        ]);
    };

    const handleDelete = async (id: string) => {
        if (user && user.email) {
            await deleteCertification(user.email, id);
            setData(data.filter((value) => value.key !== id));
            alert('Data Deleted');
        } else {
            alert('User Error');
        }
    };

    return (
        <FormLayout
            heading="Licenses & Certification"
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
                    <Name value={value.name} />
                    <Organization value={value.organization} />
                    <StartDate value={value.startDate} />
                    <EndDate value={value.endDate} />
                    <CredentialID value={value.credentialID} />
                    <CredentialUrl value={value.credentialUrl} />
                </FormCard>
            ))}
        </FormLayout>
    );
};

export default CertificationForm;
