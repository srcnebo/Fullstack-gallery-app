import React from 'react';
import { ReactComponent as Google } from '../../assets/google.svg';
import { ReactComponent as Facebook } from '../../assets/facebook.svg';
import './style.css';

const Login = () => {
  return (
    <div className="login-page">
      <div className="google-login">
        <a href="/auth/google" className="oauth-login">
          <Google className="google-logo" alt="logo" />
          <span>Continue with Google</span>
        </a>
      </div>
      <div className="facebook-login">
        <a href="/auth/facebook" className="oauth-login">
          <Facebook className="facebook-logo" alt="logo" />
          <span>Continue with Facebook</span>
        </a>
      </div>
    </div>
  );
};

export default Login;
