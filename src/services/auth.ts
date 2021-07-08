import Firebase from 'firebase';
import 'firebase/auth';
import { firebase } from '../lib/firebase';

export function addAuthStateChangedObserver(observer: any) {
  return firebase.auth().onAuthStateChanged(observer);
}

export async function createUser(
  username: any,
  fullName: any,
  emailAddress: any,
  password: any
) {
  const createdUserResult = await firebase
    .auth()
    .createUserWithEmailAndPassword(emailAddress, password);

  await createdUserResult?.user?.updateProfile({
    displayName: username,
  });

  await firebase.firestore().collection('users').add({
    userId: createdUserResult?.user?.uid,
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
