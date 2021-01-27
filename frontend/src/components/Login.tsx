import React from 'react';
import { useHistory } from 'react-router-dom';
import { googleSignin, googleSignout } from '../services/firebaseService';

const Login: React.FC = () => {
  const history = useHistory();

  const handleGoogleResponseForSignIn = async () => {
    await googleSignin();
    history.push(`/`);
  };

  const handleGoogleResponseForSignOut = async () => {
    await googleSignout();
    history.push(`/`);
  };

  return (
    <div className="login-wrapper">
      <button onClick={handleGoogleResponseForSignIn}>Google Signin</button>
      <button onClick={handleGoogleResponseForSignOut}>Google Signout</button>
    </div>
  );
};

export default Login;
