import { UserProfile } from '@auth0/nextjs-auth0';
import { getProfile } from '@utilities/dataFunctions';
import React, { useEffect, useState } from 'react';

interface PublicPageDetailProps {
    user: UserProfile | undefined;
}

const PublicPageDetail: React.FC<PublicPageDetailProps> = ({
    user,
}: PublicPageDetailProps) => {
    const [url, setUrl] = useState(
        'https://online-resume-portal.vercel.app/s/',
    );

    useEffect(() => {
        user &&
            user.email &&
            getProfile(user.email).then((data) => {
                data.username && setUrl(url + data.username);
            });
    }, []);

    const handleCopy = () => {
        navigator.clipboard.writeText(url);
        alert('URL copied to clipboard');
    };

    return (
        <div className="flex items-center">
            <p className="w-screen flex items-center justify-between p-4 mb-8 text-sm font-semibold text-indigo-100 bg-indigo-500 rounded-lg shadow-md focus:outline-none focus:shadow-outline-indigo">
                <div className="flex items-center">
                    <svg
                        className="w-5 h-5 mr-2"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                    >
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                    </svg>
                    <span>
                        Your Public profile can be accessed at{' '}
                        <a className="font-black" href={url} target="_blank">
                            {url}
                        </a>
                    </span>
                </div>
                <span
                    className="font-black cursor-pointer transform hover:scale-110"
                    onClick={handleCopy}
                >
                    Copy
                </span>
            </p>
        </div>
    );
};

export default PublicPageDetail;
