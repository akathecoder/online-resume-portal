import React from 'react';

interface InfoCardProps {
    title: string;
    information?: string;
    children?: React.ReactNode;
}

const InfoCard: React.FC<InfoCardProps> = ({
    title,
    information,
    children,
}: InfoCardProps) => {
    return (
        <li className="flex items-center py-3">
            <span className="font-medium">{title}</span>
            {information && <span className="ml-auto">{information}</span>}
            {!information && children && children}
            {!information && !children && (
                <span className="ml-auto">Not Available</span>
            )}
        </li>
    );
};

export default InfoCard;
