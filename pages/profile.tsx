import { NextPage } from 'next';
import { Navbar } from '@components/Navigation';

const Profile: NextPage = () => {
    return (
        <>
            <Navbar />
            <h1 className="bg-gray-400 py-96">Hello world from @akathecoder</h1>
        </>
    );
};

export default Profile;
