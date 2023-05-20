import React from 'react';
import style from './Auth.module.css';
import AuthForm from '../../components/AuthForm/AuthForm';
import RegistrationForm from '../../components/RegistrationForm/RegistrationForm';

const Auth = () => {
  const [switchs, setSwiths] = React.useState(false);

  const regActivate = () => {
    setSwiths(true);
  };

  const loginActivate = () => {
    setSwiths(false);
  };

  return (
    <div className={style.authu}>
      <div className="container">
        <div className={style.auth}>
          <button className={style.auth__login_btn} onClick={regActivate}>
            Вход
          </button>
          <button className={style.auth__reg_btn} onClick={loginActivate}>
            Регистрация
          </button>
        </div>

        {switchs ? <AuthForm /> : <RegistrationForm />}
      </div>
    </div>
  );
};

export default Auth;
