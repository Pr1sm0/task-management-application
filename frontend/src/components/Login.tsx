import React from 'react';
import firebase from 'firebase/app';
import 'firebase/auth';

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
    .then((result) => {
      let user = {
        name: result.user?.displayName,
        email: result.user?.email,
        role: 'user',
      };
      console.log(user);
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

const Login: React.FC = () => {
  return (
    <div className="login-wrapper">
      <button onClick={googleSignin}>Google Signin</button>
      <button onClick={googleSignout}>Google Signout</button>
    </div>
  );
};

export default Login;
