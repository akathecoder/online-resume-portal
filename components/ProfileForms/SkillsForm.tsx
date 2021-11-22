import React, { useEffect, useState } from 'react';
import FormCard from './FormCard';
import FormLayout from './FormLayout';
import { SkillBox, AddButton } from './SkillsFormComps';
import { SkillsData } from '../../utilities/profileDataTypes';
import { v4 as uuidv4 } from 'uuid';
import { UserProfile } from '@auth0/nextjs-auth0';
import { getSkills, setSkill } from '@utilities/dataFunctions';

interface SkillsFormProps {
    user: UserProfile | undefined;
}

const SkillsForm: React.FC<SkillsFormProps> = ({ user }: SkillsFormProps) => {
    const [data, setData] = useState<Array<SkillsData>>([]);

    useEffect(() => {
        user &&
            user.email &&
            getSkills(user.email).then((skills) => {
                setData(skills);
            });
    }, []);

    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();

        if (user && user.email) {
            data.forEach(async (value) => {
                if (user && user.email) {
                    await setSkill(user.email, value.key, value);
                }
            });
            alert('Data Updated');
        } else {
            alert('User Error');
        }
    };

    const handleAddSkill = (
        event: React.MouseEvent<HTMLButtonElement, MouseEvent>,
    ) => {
        event.preventDefault();
        setData([
            ...data,
            {
                key: uuidv4(),
            } as SkillsData,
        ]);
    };

    const handleOnChange = (
        event: React.ChangeEvent<HTMLInputElement>,
        key: string,
    ) => {
        setData(
            data.map((value) => {
                if (value.key === key) {
                    return {
                        key: key,
                        name: event.currentTarget.value,
                    } as SkillsData;
                } else {
                    return value;
                }
            }),
        );
    };

    const handleDeleteSkill = (key: string, value: string) => {
        setData(data.filter((value) => value.key != key));
    };

    return (
        <FormLayout
            heading="Skills"
            description="This information will be displayed publicly so be careful what you share."
        >
            <FormCard onSubmit={handleSubmit}>
                {data.map((skill) => (
                    <SkillBox
                        data={skill}
                        onChange={handleOnChange}
                        onDelete={handleDeleteSkill}
                    />
                ))}

                <div className="col-span-6 flex justify-end">
                    <AddButton onClick={handleAddSkill} />
                </div>
            </FormCard>
        </FormLayout>
    );
};

export default SkillsForm;
