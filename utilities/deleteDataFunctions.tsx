import { firestoreDb } from './firebase';

export async function deleteAbout(email: string, id: string) {
    await firestoreDb
        .collection('users')
        .doc(email)
        .collection('about')
        .doc(`${id}`)
        .delete();
}

export async function deleteEducation(email: string, id: string) {
    await firestoreDb
        .collection('users')
        .doc(email)
        .collection('education')
        .doc(`${id}`)
        .delete();
}

export async function deleteExperience(email: string, id: string) {
    await firestoreDb
        .collection('users')
        .doc(email)
        .collection('experience')
        .doc(`${id}`)
        .delete();
}

export async function deleteCertification(email: string, id: string) {
    await firestoreDb
        .collection('users')
        .doc(email)
        .collection('certification')
        .doc(`${id}`)
        .delete();
}
