import { NextPage } from 'next';
import Head from 'next/head';

const Home: NextPage = () => {
    return (
        <>
            <Head>
                <meta http-equiv="refresh" content="0; url=/profile" />
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
