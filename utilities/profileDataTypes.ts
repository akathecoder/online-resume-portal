export interface StudentProfileType {
    profile: ProfileData;
    about: Array<AboutData>;
    skills: Array<SkillsData>;
    expereince: Array<ExpereinceData>;
    education: Array<EducationData>;
    certification: Array<CertificationData>;
}

export interface ProfileData {
    image: string;
    name: string;
    tagline?: string;
    bio?: string;
    status: 'student' | 'graduated';
    graduationDate?: string;
    branch?: string;
    degree?: string;
}

export interface AboutData {
    key: string;
    title: string;
    detail: string;
    link?: string;
}

export interface SkillsData {
    key: string;
    name: string;
}

export interface ExpereinceData {
    key: number;
    companyName: string;
    position: string;
    place: string;
    startDate: string;
    endDate: string;
    details: string;
}

export interface EducationData {
    key: string;
    school: string;
    degree: string;
    fieldOfStudy: string;
    grade: number;
    startDate: string;
    endDate: string;
    details: string;
}

export interface CertificationData {
    key: number;
    name: string;
    organization: string;
    startDate: string;
    endDate: string;
    credentialID: string;
    credentialUrl: string;
}
