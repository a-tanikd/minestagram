import { firebase } from '../lib/firebase';

export function addAuthStateChangedObserver(observer) {
  return firebase.auth().onAuthStateChanged(observer);
}

export async function createUser(username, fullName, emailAddress, password) {
  const createdUserResult = await firebase
    .auth()
    .createUserWithEmailAndPassword(emailAddress, password);

  await createdUserResult.user.updateProfile({
    displayName: username,
  });

  await firebase.firestore().collection('users').add({
    userId: createdUserResult.user.uid,
    username: username.toLowerCase(),
    fullName,
    emailAddress: emailAddress.toLowerCase(),
    following: [],
    followers: [],
    dateCreated: Date.now(),
  });
}

export async function login(emailAddress, password) {
  await firebase.auth().signInWithEmailAndPassword(emailAddress, password);
}

export async function signOut() {
  await firebase.auth().signOut();
}
