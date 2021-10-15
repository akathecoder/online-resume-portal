import { NextPage } from 'next';
import { Navbar } from '@components/Navigation';
import ProfileCard from '@components/Profile/ProfileCard';
import AboutSection from '@components/Profile/AboutSection';
import ExpereinceSection from '@components/Profile/ExpereinceSection';

const Profile: NextPage = () => {
    return (
        <>
            <Navbar />
            <main className="bg-gray-100">
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

                        <div className="w-full md:w-9/12 mx-2 grid gap-3">
                            <AboutSection />
                            <ExpereinceSection />
                        </div>
                    </div>
                </div>
            </main>
        </>
    );
};

export default Profile;
