import {
    AboutData,
    CertificationData,
    ProfileData,
    StudentProfileType,
    EducationData,
    ExpereinceData,
    SkillsData,
} from './profileDataTypes';
import { firestoreDb } from './firebase';

export async function getUserDataByUsername(
    username: string,
): Promise<StudentProfileType> {
    const document = await firestoreDb.collection('users').doc(username).get();
    return document.data() as StudentProfileType;
}

export async function setProfile(username: string, data: ProfileData) {
    await firestoreDb.collection('users').doc(username).set(data);
}

export async function setCertification(
    username: string,
    id: string,
    data: CertificationData,
) {
    await firestoreDb
        .collection('users')
        .doc(username)
        .collection('certification')
        .doc(id)
        .set(data);
}

export async function setEducation(
    username: string,
    id: string,
    data: EducationData,
) {
    await firestoreDb
        .collection('users')
        .doc(username)
        .collection('education')
        .doc(id)
        .set(data);
}

export async function setExperience(
    username: string,
    id: string,
    data: ExpereinceData,
) {
    await firestoreDb
        .collection('users')
        .doc(username)
        .collection('experience')
        .doc(id)
        .set(data);
}

export async function setSkill(username: string, id: string, data: SkillsData) {
    await firestoreDb
        .collection('users')
        .doc(username)
        .collection('skills')
        .doc(id)
        .set(data);
}

export async function setAbout(username: string, id: string, data: AboutData) {
    await firestoreDb
        .collection('users')
        .doc(username)
        .collection('about')
        .doc(id)
        .set(data);
}
