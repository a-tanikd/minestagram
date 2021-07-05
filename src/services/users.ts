import { FieldValue, firebase } from '../lib/firebase';
export async function doesUsernameExist(username: any) {
  const result = await firebase
    .firestore()
    .collection('users')
    .where('username', '==', username)
    .get();
  return result.docs.length > 0;
}
export async function getUserByUserId(userId: any) {
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
export async function getUserByUsername(username: any) {
  const result = await firebase
    .firestore()
    .collection('users')
    .where('username', '==', username)
    .get();
  return result.docs.length > 0
    ? result.docs.map((user) => ({
        ...user.data(),
        docId: user.id,
      }))[0]
    : null;
}
export async function getSuggestedProfiles(userId: any, following: any) {
  const result = await firebase
    .firestore()
    .collection('users')
    .where('userId', '!=', userId)
    .limit(10)
    .get();
  return result.docs
    .map((user) => ({ ...user.data(), docId: user.id }))
    .filter((profile) => !following.includes((profile as any).userId));
}
export async function updateLoggedInUserFollowing(
  loggedInUserDocId: any,
  profileUserId: any,
  isFollowingProfile: any
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
  profileDocId: any,
  loggedInUserId: any,
  isFollowed: any
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
export async function isUserFollowingProfile(
  loggedInUserUsername: any,
  profileUserId: any
) {
  const result = await firebase
    .firestore()
    .collection('users')
    .where('username', '==', loggedInUserUsername)
    .get();
  return result.docs?.[0].data().following.includes(profileUserId) ?? false;
}
export async function toggleFollow(
  isFollowingProfile: any,
  activeUserDocId: any,
  profileDocId: any,
  profileUserId: any,
  activeUserId: any
) {
  await updateLoggedInUserFollowing(
    activeUserDocId,
    profileUserId,
    isFollowingProfile
  );
  await updateFollowedUserFollower(
    profileDocId,
    activeUserId,
    isFollowingProfile
  );
}
