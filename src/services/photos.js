import { FieldValue, firebase } from '../lib/firebase';
import { getUserByUserId } from './users';

export async function getPhotos(userId, following) {
  const result = await firebase
    .firestore()
    .collection('photos')
    .where('userId', 'in', following)
    .get();

  const userFollowedPhotos = result.docs.map((photo) => ({
    ...photo.data(),
    docId: photo.id,
  }));

  const photosWithUserDetails = await Promise.all(
    userFollowedPhotos.map(async (photo) => {
      const userLikedPhoto = photo.likes.includes(userId);
      const user = await getUserByUserId(photo.userId);
      const { username } = user[0];
      return { username, ...photo, userLikedPhoto };
    })
  );

  return photosWithUserDetails;
}

export async function getUserPhotosByUserId(userId) {
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

export async function togglePhotoLike(docId, userId, toggleLiked) {
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

export async function addPhotoComment(docId, displayName, comment) {
  await firebase
    .firestore()
    .collection('photos')
    .doc(docId)
    .update({
      comments: FieldValue.arrayUnion({ displayName, comment }),
    });
}
