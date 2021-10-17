import {
    GetServerSideProps,
    InferGetServerSidePropsType,
    NextPage,
} from 'next';
import { Navbar } from '@components/Navigation';
import {
    ProfileCard,
    AboutSection,
    ExpereinceSection,
    EducationSection,
    CertificationSection,
    SkillsSection,
} from '@components/Profile';
import { StudentProfileType } from '@utilities/profileDataTypes';

import jsonData from '../../data/akathecoder.json';

const Username: NextPage<
    InferGetServerSidePropsType<typeof getServerSideProps>
> = ({ data }) => {
    return (
        <>
            <Navbar />
            <main className="bg-gray-100">
                <div className="container mx-auto p-5">
                    <div className="md:flex no-wrap md:-mx-2">
                        <div className="w-full md:w-3/12 md:mx-2">
                            <ProfileCard data={data.profile} />
                        </div>

                        <div className="w-full md:w-9/12 mx-2 grid gap-3">
                            <AboutSection data={data.about} />
                            <SkillsSection data={data.skills} />
                            <ExpereinceSection data={data.expereince} />
                            <EducationSection data={data.education} />
                            <CertificationSection data={data.certification} />
                        </div>
                    </div>
                </div>
            </main>
        </>
    );
};

type Data = {
    data: StudentProfileType;
};

export const getServerSideProps: GetServerSideProps<Data> = async (ctx) => {
    const username = ctx.params?.username;

    return {
        props: {
            data: jsonData as StudentProfileType,
        },
    };
};

export default Username;
