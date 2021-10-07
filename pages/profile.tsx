import { NextPage } from 'next';
import { Navbar } from '@components/Navigation';
import ProfileCard from '@components/Profile/ProfileCard';

const Profile: NextPage = () => {
    return (
        <>
            <Navbar />
            <main className="bg-gray-50">
                <div className="container mx-auto p-5">
                    <div className="md:flex no-wrap md:-mx-2">
                        <div className="w-full md:w-3/12 md:mx-2">
                            <ProfileCard
                                name="John Doe"
                                tagline="Full Stack Developer"
                                bio="Lorem ipsum dolor sit amet consectetur adipisicing elit.
                            Reprehenderit, eligendi dolorum sequi illum qui unde aspernatur
                            non deserunt"
                                image="https://doodleipsum.com/500/avatar-4?bg=ceebff"
                                status="student"
                                degree="Bachelor of Technology"
                                branch="Computer Science and Engineering"
                                graduationDate="July 2023"
                            />
                        </div>
                    </div>
                </div>
            </main>
        </>
    );
};

export default Profile;
