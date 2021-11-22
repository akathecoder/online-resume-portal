import { UserProfile } from '@auth0/nextjs-auth0';
import { getProfile, setProfile } from '@utilities/dataFunctions';
import { ProfileData } from '@utilities/profileDataTypes';
import React, { useEffect, useState } from 'react';
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

interface ProfileCardFormProps {
    user: UserProfile | undefined;
}

const ProfileCardForm: React.FC<ProfileCardFormProps> = ({
    user,
}: ProfileCardFormProps) => {
    const [profilePhoto, setProfilePhoto] = useState<string>();
    const [name, setName] = useState<string>();
    const [position, setPosition] = useState<string | undefined>();
    const [about, setAbout] = useState<string | undefined>();
    const [status, setStatus] = useState<string>();
    const [graduationDate, setGraduationDate] = useState<string | undefined>();
    const [degree, setDegree] = useState<string | undefined>();
    const [branch, setBranch] = useState<string | undefined>();

    useEffect(() => {
        user &&
            user.email &&
            getProfile(user.email).then((data) => {
                setProfilePhoto(data.image);
                setName(data.name);
                setPosition(data.tagline);
                setAbout(data.bio);
                setStatus(data.status);
                setGraduationDate(data.graduationDate);
                setDegree(data.degree);
                setBranch(data.branch);
            });
    }, []);

    const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        console.log(
            profilePhoto,
            name,
            position,
            about,
            status,
            graduationDate,
            degree,
            branch,
        );

        if (user && user.email) {
            await setProfile(user?.email, {
                image: profilePhoto,
                name: name,
                status: status,
                bio: about,
                branch: branch,
                degree: degree,
                graduationDate: graduationDate,
                tagline: position,
            } as ProfileData);
            alert('Data Updated');
        } else {
            alert('User Error');
        }
    };

    const handleDelete = async (
        event: React.MouseEvent<HTMLButtonElement, MouseEvent>,
    ) => {};

    return (
        <FormLayout
            heading="Profile"
            description="This information will be displayed publicly so be careful what you share."
        >
            <FormCard onSubmit={handleSubmit} onDelete={handleDelete}>
                <ProfilePhoto value={profilePhoto} setValue={setProfilePhoto} />
                <Name value={name} setValue={setName} />
                <Position value={position} setValue={setPosition} />
                <About value={about} setValue={setAbout} />
                <Status value={status} setValue={setStatus} />
                <GraduationDate
                    value={graduationDate}
                    setValue={setGraduationDate}
                />
                <Degree value={degree} setValue={setDegree} />
                <Branch value={branch} setValue={setBranch} />
            </FormCard>
        </FormLayout>
    );
};

export default ProfileCardForm;
