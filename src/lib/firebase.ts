import Firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
  apiKey: 'AIzaSyAeuJVeTdoEQ3za37FnKGBmdt_dFw8_Lg4',
  authDomain: 'minestagram-3bec4.firebaseapp.com',
  projectId: 'minestagram-3bec4',
  storageBucket: 'minestagram-3bec4.appspot.com',
  messagingSenderId: '689280046443',
  appId: '1:689280046443:web:f2c33fa0f704fd7e34a82e',
};

const firebase = Firebase.initializeApp(config);
const { FieldValue } = Firebase.firestore;

export { firebase, FieldValue };
