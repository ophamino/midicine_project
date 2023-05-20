import React from 'react';

import { Link } from 'react-router-dom';

const Auth = () => {
  return (
    <div>
      <div className="container">
        <Link to="/auth/login">Вход </Link>
        <Link to="/auth/reg">Регистрация</Link>
      </div>
    </div>
  );
};

export default Auth;
