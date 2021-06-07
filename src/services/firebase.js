import { FieldValue, firebase } from '../lib/firebase';

export async function doesUsernameExist(username) {
  const result = await firebase
    .firestore()
    .collection('users')
    .where('username', '==', username)
    .get();

  return result.docs.some((user) => user.data().length > 0);
}

export async function getUserByUserId(userId) {
  const result = await firebase
    .firestore()
    .collection('users')
    .where('userId', '==', userId)
    .get();

  const user = result.docs.map((item) => ({
    ...item.data(),
    docId: item.id,
  }));

  return user;
}

export async function getSuggestedProfiles(userId, following) {
  const result = await firebase
    .firestore()
    .collection('users')
    .where('userId', '!=', userId)
    .limit(10)
    .get();

  return result.docs
    .map((user) => ({ ...user.data(), docId: user.id }))
    .filter((profile) => !following.includes(profile.userId));
}

export async function updateLoggedInUserFollowing(
  loggedInUserDocId,
  profileUserId,
  isFollowingProfile
) {
  return firebase
    .firestore()
    .collection('users')
    .doc(loggedInUserDocId)
    .update({
      following: isFollowingProfile
        ? FieldValue.arrayRemove(profileUserId)
        : FieldValue.arrayUnion(profileUserId),
    });
}

export async function updateFollowedUserFollower(
  profileDocId,
  loggedInUserId,
  isFollowed
) {
  return firebase
    .firestore()
    .collection('users')
    .doc(profileDocId)
    .update({
      followers: isFollowed
        ? FieldValue.arrayRemove(loggedInUserId)
        : FieldValue.arrayUnion(loggedInUserId),
    });
}

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
