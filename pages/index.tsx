import { NextPage } from 'next';
import Head from 'next/head';

const Home: NextPage = () => {
    return (
        <>
            <Head>
                <meta http-equiv="refresh" content="0; url=/profile" />
                <meta property="og:title" content="Online Resume Portal" />
                <meta
                    property="og:description"
                    content="Create your very own portfolio instantly"
                />
                <meta
                    property="og:image"
                    content="https://online-resume-portal.vercel.app/socialPreview.jpg"
                />

                <meta property="twitter:title" content="Online Resume Portal" />
                <meta
                    property="twitter:description"
                    content="Create your very own portfolio instantly"
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
            <main>
                <div>
                    <h1>Online Resume Builder</h1>

                    <a href="/api/auth/login" className="">
                        Login
                    </a>
                </div>
            </main>
        </>
    );
};

export default Home;
