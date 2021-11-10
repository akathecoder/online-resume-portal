import { storageRef } from './firebase';
import { v4 as uuidv4 } from 'uuid';

export async function uploadProfilePic(image: File): Promise<string> {
    const uploadRef = storageRef.child('profilePic/' + uuidv4());
    const snapshot = await uploadRef.put(image);
    return await snapshot.ref.getDownloadURL();
}
