import React from 'react';
import style from './AuthForm.module.css';
import { Link } from 'react-router-dom';

const AuthForm = () => {
  return (
    <div className={style.authForm}>
      <form className={style.authForm__form}>
        <div className={style.authForm__form_email}>
          <label htmlFor="email">Email: </label>
          <input type="email" name="email" />
        </div>

        <div className={style.authForm__form_password}>
          <label htmlFor="password">Пароль:</label>
          <input type="passwordw" name="password" />
        </div>

        <button className={style.authForm__form_btn}>Вход</button>
      </form>
      <Link to="/auth/reg">Зарегистрироваться</Link>
    </div>
  );
};

export default AuthForm;
