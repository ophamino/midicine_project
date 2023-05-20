import React from 'react';
import style from './RegistrationForm.module.css';
import { Link } from 'react-router-dom';

const RegistrationForm = () => {
  return (
    <div className={style.registrationForm}>
      <form className={style.registrationForm__form}>
        <div className={style.registrationForm__form_firstName}>
          <label htmlFor="firstName">Имя: </label>
          <input type="text" name="firstName" />
        </div>

        <div className={style.registrationForm__form_lastName}>
          <label htmlFor="lastName">Фамилия: </label>
          <input type="text" name="lastName" />
        </div>
        <div className={style.registrationForm__form_phone}>
          <label htmlFor="phone">Телефон:</label>
          <input type="tel" name="phone" />
        </div>

        <div className={style.registrationForm__form_email}>
          <label htmlFor="email">Email: </label>
          <input type="email" name="email" />
        </div>

        <div className={style.registrationForm__form_password}>
          <label htmlFor="password">Пароь:</label>
          <input type="passwordw" name="password" />
        </div>

        <button className={style.registrationForm__form_btn}>
          Регистрация
        </button>
      </form>
      <Link to="/auth/login">Вход</Link>
    </div>
  );
};

export default RegistrationForm;
