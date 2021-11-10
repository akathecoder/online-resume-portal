import { NextPage } from 'next';
import { Navbar } from '@components/Navigation';
import ProfileCardForm from '@components/ProfileForms/ProfileCardForm';
import EducationForm from '@components/ProfileForms/EducationForm';
import ExperienceForm from '@components/ProfileForms/ExperienceForm';
import CertificationForm from '@components/ProfileForms/CertificationForm';
import SkillsForm from '@components/ProfileForms/SkillsForm';
import AboutForm from '@components/ProfileForms/AboutForm';
import { useUser } from '@auth0/nextjs-auth0';

const Profile: NextPage = () => {
    const { user, error, isLoading } = useUser();

    if (isLoading) return <div>Loading...</div>;
    if (error) return <div>{error.message}</div>;

    return (
        <>
            <Navbar />
            <main className="bg-gray-100">
                <div className="container mx-auto p-5">
                    <div className=" no-wrap md:-mx-2">
                        <ProfileCardForm user={user} />
                        <AboutForm user={user} />
                        <SkillsForm user={user} />
                        <EducationForm user={user} />
                        <ExperienceForm />
                        <CertificationForm />
                    </div>
                </div>
            </main>
        </>
    );
};

export default Profile;
