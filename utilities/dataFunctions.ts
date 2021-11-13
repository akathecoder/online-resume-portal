import {
    AboutData,
    CertificationData,
    ProfileData,
    StudentProfileType,
    EducationData,
    ExperienceData,
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
    data: ExperienceData,
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

export async function getSkills(email: string): Promise<Array<SkillsData>> {
    const document = await firestoreDb
        .collection('users')
        .doc(email)
        .collection('skills')
        .get();

    return document.docs.map((value) => value.data() as SkillsData);
}

export async function getEducation(
    email: string,
): Promise<Array<EducationData>> {
    const document = await firestoreDb
        .collection('users')
        .doc(email)
        .collection('education')
        .get();

    return document.docs.map((value) => value.data() as EducationData);
}

export async function getExperience(
    email: string,
): Promise<Array<ExperienceData>> {
    const document = await firestoreDb
        .collection('users')
        .doc(email)
        .collection('experience')
        .get();

    return document.docs.map((value) => value.data() as ExperienceData);
}

export async function getCertification(
    email: string,
): Promise<Array<CertificationData>> {
    const document = await firestoreDb
        .collection('users')
        .doc(email)
        .collection('certification')
        .get();

    return document.docs.map((value) => value.data() as CertificationData);
}

export async function createUserEmail(
    email: string,
    username: string,
): Promise<void> {
    await firestoreDb
        .collection('userEmails')
        .doc(username)
        .set({ email: email });
}

export async function setUserVisibility(
    email: string,
    username: string,
    visibility: boolean,
) {
    if (visibility) {
        await firestoreDb.collection('userEmails').doc(email).set({
            username: username,
        });
    } else {
        await firestoreDb.collection('userEmails').doc(email).delete();
    }
}

export async function getUserVisibility(email: string): Promise<boolean> {
    const document = await firestoreDb
        .collection('userEmails')
        .doc(email)
        .get();

    const a = document.data();

    console.log('hulala');

    console.log(a);

    return document.data() ? true : false;
}
