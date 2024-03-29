export interface StudentProfileType {
    profile: ProfileData;
    about: Array<AboutData>;
    skills: Array<SkillsData>;
    expereince: Array<ExperienceData>;
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
    username?: string;
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

export interface ExperienceData {
    key: string;
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
    key: string;
    name: string;
    organization: string;
    startDate: string;
    endDate: string;
    credentialID: string;
    credentialUrl: string;
}
