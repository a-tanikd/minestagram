import { firebase } from '../lib/firebase';

export function addAuthStateChangedObserver(observer: any) {
  return firebase.auth().onAuthStateChanged(observer);
}

export async function createUser(username: any, fullName: any, emailAddress: any, password: any) {
  const createdUserResult = await firebase
    .auth()
    .createUserWithEmailAndPassword(emailAddress, password);

  // @ts-expect-error ts-migrate(2531) FIXME: Object is possibly 'null'.
  await createdUserResult.user.updateProfile({
    displayName: username,
  });

  await firebase.firestore().collection('users').add({
    // @ts-expect-error ts-migrate(2531) FIXME: Object is possibly 'null'.
    userId: createdUserResult.user.uid,
    username: username.toLowerCase(),
    fullName,
    emailAddress: emailAddress.toLowerCase(),
    following: [],
    followers: [],
    dateCreated: Date.now(),
  });
}

export async function login(emailAddress: any, password: any) {
  await firebase.auth().signInWithEmailAndPassword(emailAddress, password);
}

export async function signOut() {
  await firebase.auth().signOut();
}
