import React from 'react';
import Logo from '../images/tma.png';
import Button from '../images/google-login.png';
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
        <input type="image" src={Button} onClick={handleGoogleResponseForSignIn} alt=""/>
        <button onClick={handleGoogleResponseForSignOut}>Google Signout</button>
      </div>
    </div>
  );
};

export default Login;
