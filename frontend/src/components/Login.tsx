import React from 'react';
import Logo from '../images/tma.png';
import GoogleLogo from '../images/google_logo.svg';
import { useHistory } from 'react-router-dom';
import { googleSignin, googleSignout } from '../services/firebaseService';
import './login.scss';

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
      <div className="border-wrapper">
        <img src={Logo} alt="logo" className="logo" />
        <h1 className="project-name">TMA</h1>
        <h2 className="moto">Your faithfull task manager</h2>
        <button className="login-btn" onClick={handleGoogleResponseForSignIn}>
          <img src={GoogleLogo} alt="google-logo" className="google-logo"/>
          <span className="login-btn-link">Sign in with Google</span>
        </button>
        <button className="logout-btn" onClick={handleGoogleResponseForSignOut}>Google SignOut</button>
      </div>
    </div>
  );
};

export default Login;
