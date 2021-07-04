import { FieldValue, firebase } from '../lib/firebase';
import { getUserByUserId } from './users';
export async function getPhotos(userId: any, following: any) {
    const result = await firebase
        .firestore()
        .collection('photos')
        .where('userId', 'in', following)
        .get();
    const userFollowedPhotos = result.docs.map((photo) => ({
        ...photo.data(),
        docId: photo.id,
    }));
    const photosWithUserDetails = await Promise.all(userFollowedPhotos.map(async (photo) => {
        const userLikedPhoto = (photo as any).likes.includes(userId);
        const user = await getUserByUserId((photo as any).userId);
        // @ts-expect-error ts-migrate(2339) FIXME: Property 'username' does not exist on type '{ docI... Remove this comment to see the full error message
        const { username } = user[0];
        return { username, ...photo, userLikedPhoto };
    }));
    return photosWithUserDetails;
}
export async function getUserPhotosByUserId(userId: any) {
    const result = await firebase
        .firestore()
        .collection('photos')
        .where('userId', '==', userId)
        .get();
    return result.docs.map((item) => ({
        ...item.data(),
        docId: item.id,
    }));
}
export async function togglePhotoLike(docId: any, userId: any, toggleLiked: any) {
    await firebase
        .firestore()
        .collection('photos')
        .doc(docId)
        .update({
        likes: toggleLiked
            ? FieldValue.arrayRemove(userId)
            : FieldValue.arrayUnion(userId),
    });
}
export async function addPhotoComment(docId: any, displayName: any, comment: any) {
    await firebase
        .firestore()
        .collection('photos')
        .doc(docId)
        .update({
        comments: FieldValue.arrayUnion({ displayName, comment }),
    });
}
