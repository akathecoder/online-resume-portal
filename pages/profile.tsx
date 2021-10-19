import { NextPage } from 'next';
import { Navbar } from '@components/Navigation';
import ProfileCard from '@components/ProfileForms/ProfileCard';

const Profile: NextPage = () => {
    return (
        <>
            <Navbar />
            <main className="bg-gray-100">
                <div className="container mx-auto p-5">
                    <div className=" no-wrap md:-mx-2">
                        <ProfileCard />
                    </div>
                </div>
            </main>
        </>
    );
};

export default Profile;
