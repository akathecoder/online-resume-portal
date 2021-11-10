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

export async function createUser(
    email: string,
    username: string,
): Promise<void> {
    await firestoreDb.collection('users').doc(email).set(
        { username: username },
        {
            merge: true,
        },
    );
}

export async function getUserDataByUsername(
    username: string,
): Promise<StudentProfileType> {
    const document = await firestoreDb.collection('users').doc(username).get();
    return document.data() as StudentProfileType;
}

export async function setProfile(email: string, data: ProfileData) {
    await firestoreDb.collection('users').doc(email).set(data);
}

export async function setCertification(
    email: string,
    id: string,
    data: CertificationData,
) {
    await firestoreDb
        .collection('users')
        .doc(email)
        .collection('certification')
        .doc(id)
        .set(data);
}

export async function setEducation(
    email: string,
    id: string,
    data: EducationData,
) {
    await firestoreDb
        .collection('users')
        .doc(email)
        .collection('education')
        .doc(id)
        .set(data);
}

export async function setExperience(
    email: string,
    id: string,
    data: ExpereinceData,
) {
    await firestoreDb
        .collection('users')
        .doc(email)
        .collection('experience')
        .doc(id)
        .set(data);
}

export async function setSkill(email: string, id: string, data: SkillsData) {
    await firestoreDb
        .collection('users')
        .doc(email)
        .collection('skills')
        .doc(id)
        .set(data);
}

export async function setAbout(email: string, id: number, data: AboutData) {
    await firestoreDb
        .collection('users')
        .doc(email)
        .collection('about')
        .doc(`${id}`)
        .set(data);
}

export async function getProfile(email: string): Promise<ProfileData> {
    const document = await firestoreDb.collection('users').doc(email).get();
    return document.data() as ProfileData;
}

export async function getAbout(email: string): Promise<Array<AboutData>> {
    const document = await firestoreDb
        .collection('users')
        .doc(email)
        .collection('about')
        .get();

    return document.docs.map((value) => value.data() as AboutData);
}
