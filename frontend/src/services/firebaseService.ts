import firebase from 'firebase/app';
import 'firebase/auth';
import { postRequest } from '../services/apiService';
import { saveUserToStorage } from './localStorageService';

const firebaseConfig = {
  apiKey: 'AIzaSyCWAAOKW9mMzFJZRAN1rz8i6K0h0kjN8ME',
  authDomain: 'task-management-applicat-c1004.firebaseapp.com',
  projectId: 'task-management-applicat-c1004',
  storageBucket: 'task-management-applicat-c1004.appspot.com',
  messagingSenderId: '348639421963',
  appId: '1:348639421963:web:6e2c6931da335965f0490e',
  measurementId: 'G-JPHX8FPYYE'
};
if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
} else {
  firebase.app();
}

var provider = new firebase.auth.GoogleAuthProvider();

export function googleSignin() {
  return firebase
    .auth()
    .signInWithPopup(provider)
    .then(async res => {
      const findUser = await postRequest('user/emailcheck', { email: res.user?.email });
      if (!findUser) {
        postRequest('user/login', {
          name: res.user?.displayName,
          photoUrl: res.user?.photoURL,
          email: res.user?.email,
          role: 'user'
        }).then(res => {
          saveUserToStorage(res);
        });
      } else {
        saveUserToStorage(findUser);
      }
    })
    .catch(error => {
      console.log(error.code);
      console.log(error.message);
    });
}

export function googleSignout() {
  return firebase
    .auth()
    .signOut()
    .then(
      () => {
        console.log('Signout Succesfull');
      },
      error => {
        console.log('Signout Failed');
      }
    );
}
