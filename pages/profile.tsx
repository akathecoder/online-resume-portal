import { NextPage } from 'next';
import { Navbar } from '@components/Navigation';
import ProfileCardForm from '@components/ProfileForms/ProfileCardForm';
import EducationForm from '@components/ProfileForms/EducationForm';

const Profile: NextPage = () => {
    return (
        <>
            <Navbar />
            <main className="bg-gray-100">
                <div className="container mx-auto p-5">
                    <div className=" no-wrap md:-mx-2">
                        <ProfileCardForm />
                        <EducationForm />
                    </div>
                </div>
            </main>
        </>
    );
};

export default Profile;
