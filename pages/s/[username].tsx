import Head from 'next/head';
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
import { getUserDataByUsername } from '@utilities/dataFunctions';

const Username: NextPage<
    InferGetServerSidePropsType<typeof getServerSideProps>
> = ({ data }) => {
    if (!data) {
        return (
            <Head>
                <meta http-equiv="refresh" content="0; url=/404" />
            </Head>
        );
    }

    return (
        <>
            <Head>
                <meta http-equiv="refresh" content="0; url=/profile" />
                <meta
                    property="og:title"
                    content={data.profile.name + "' Portfolio"}
                />
                <meta
                    property="og:description"
                    content="Check out very own portfolio on Online Resume Portal"
                />
                <meta
                    property="og:image"
                    content="https://online-resume-portal.vercel.app/socialPreview.jpg"
                />

                <meta
                    property="twitter:title"
                    content={data.profile.name + "' Portfolio"}
                />
                <meta
                    property="twitter:description"
                    content="Check out very own portfolio on Online Resume Portal"
                />
                <meta
                    property="twitter:card"
                    content="summary_large_image
"
                />
                <meta
                    property="twitter:image"
                    content="https://online-resume-portal.vercel.app/socialPreview.jpg"
                />
            </Head>
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
    data: StudentProfileType | null;
};

export const getServerSideProps: GetServerSideProps<Data> = async (ctx) => {
    const username: string = ctx.params?.username + '';

    const data = await getUserDataByUsername(username);
    console.log('data', data);

    return {
        props: {
            data: data,
        },
    };
};

export default Username;
