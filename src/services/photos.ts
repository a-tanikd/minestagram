import { FieldValue, firebase } from '../lib/firebase';
import Photo from '../types/photo';
import { getUserByUserId } from './users';

export async function getPhotos(
  userId: string,
  following: string[]
): Promise<Photo[]> {
  const result = await firebase
    .firestore()
    .collection('photos')
    .where('userId', 'in', following)
    .get();

  const userFollowedPhotos = result.docs.map(
    (photo) =>
      ({
        ...photo.data(),
        docId: photo.id,
      } as any)
  );

  const photosWithUserDetails = await Promise.all(
    userFollowedPhotos.map(async (photo) => {
      const userLikedPhoto = photo.likes.includes(userId);
      const user = await getUserByUserId(photo.userId);
      const { username } = user;
      return { username, ...photo, userLikedPhoto };
    })
  );
  return photosWithUserDetails;
}

export async function getUserPhotosByUserId(userId: string): Promise<Photo[]> {
  const result = await firebase
    .firestore()
    .collection('photos')
    .where('userId', '==', userId)
    .get();

  return result.docs.map((item) => ({
    ...(item.data() as Omit<Photo, 'docId'>),
    docId: item.id,
  }));
}

export async function togglePhotoLike(
  docId: any,
  userId: any,
  toggleLiked: any
) {
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

export async function addPhotoComment(
  docId: any,
  displayName: any,
  comment: any
) {
  await firebase
    .firestore()
    .collection('photos')
    .doc(docId)
    .update({
      comments: FieldValue.arrayUnion({ displayName, comment }),
    });
}
