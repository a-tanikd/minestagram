import { FieldValue, firebase } from '../lib/firebase';
import User from '../types/user';

export async function doesUsernameExist(username: string) {
  const result = await firebase
    .firestore()
    .collection('users')
    .where('username', '==', username)
    .get();
  return result.docs.length > 0;
}

export async function getUserByUserId(userId: string): Promise<User> {
  const result = await firebase
    .firestore()
    .collection('users')
    .where('userId', '==', userId)
    .get();

  const user = result.docs.map<User>((item) => ({
    ...(item.data() as Omit<User, 'docId'>),
    docId: item.id,
  }))?.[0];
  return user;
}

export async function getUserByUsername(username: string): Promise<User> {
  const result = await firebase
    .firestore()
    .collection('users')
    .where('username', '==', username)
    .get();

  return result.docs.map<User>((user) => ({
    ...(user.data() as Omit<User, 'docId'>),
    docId: user.id,
  }))?.[0];
}

export async function getSuggestedProfiles(
  userId: string,
  following: string[]
): Promise<User[]> {
  const result = await firebase
    .firestore()
    .collection('users')
    .where('userId', '!=', userId)
    .limit(10)
    .get();
  return result.docs
    .map<User>((user) => ({
      ...(user.data() as Omit<User, 'docId'>),
      docId: user.id,
    }))
    .filter((profile) => !following.includes(profile.userId));
}

export async function updateLoggedInUserFollowing(
  loggedInUserDocId: string,
  profileUserId: string,
  isFollowingProfile: boolean
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
