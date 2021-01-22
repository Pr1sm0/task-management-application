import React from 'react';
import firebase from 'firebase/app';
import { useHistory } from 'react-router-dom';
import 'firebase/auth';
import { postRequest } from '../services/apiService';
import { saveUserToStorage } from '../services/sessionStorageService';

const Login: React.FC = () => {
  const history = useHistory();

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

function googleSignin() {
  firebase
    .auth()
    .signInWithPopup(provider)
    .then(async res => {
      const findUser = await postRequest('user/emailcheck', {email: res.user?.email});
      if(!findUser){
        postRequest('user/login', {
          name: res.user?.displayName,
          photoUrl: res.user?.photoURL,
          email: res.user?.email,
          role: 'user',
        })
        .then(res => {
          saveUserToStorage(res);
          history.push(`/`);
        })
      } else {
        saveUserToStorage(findUser);
        history.push(`/`);
      }
    })
    .catch((error) => {
      console.log(error.code);
      console.log(error.message);
    });
}

function googleSignout() {
  firebase
    .auth()
    .signOut()
    .then(
      () => {
        console.log('Signout Succesfull');
      },
      (error) => {
        console.log('Signout Failed');
      }
    );
}
  return (
    <div className="login-wrapper">
      <button onClick={googleSignin}>Google Signin</button>
      <button onClick={googleSignout}>Google Signout</button>
    </div>
  );
};

export default Login;
