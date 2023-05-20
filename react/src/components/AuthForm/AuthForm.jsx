import React from 'react';
import style from './AuthForm.module.css';
import { Link } from 'react-router-dom';
import { URL_API_REG } from '../../urls';
import axios from 'axios';

const AuthForm = () => {
  const [email, setEmail] = React.useState('');
  const [emailDirty, setEmailDirty] = React.useState(false);
  const [emailError, setEmailError] = React.useState(
    'Email не может быть пустым'
  );
  const [password, setPassword] = React.useState('');

  const authUser = async () => {
    try {
      // const body = {
      //   email: email,
      //   password: password,
      // };
      // const response = await axios
      //   .post(URL_API_REG, body)
      //   .then((data) => {
      //     console.log(data);
      //   })
      //   .catch((data) => console.log(data));
      console.log(email);
      console.log(password);
    } catch (error) {}
  };

  const handleEmail = (e) => {
    setEmail(e.target.value);
    const re =
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{1,}))$/;
    if (!re.test(String(email).toLowerCase())) {
      setEmailError('Некорректный Email');
    } else {
      setEmailError('');
    }
  };

  const handleBlur = (e) => {
    switch (e.target.name) {
      case 'email':
        setEmailDirty(true);
        break;
    }
  };

  const handleCreateUser = (event) => {
    authUser();
    event.preventDefault();
  };

  return (
    <div className={style.authForm}>
      <form className={style.authForm__form} onSubmit={handleCreateUser}>
        {emailDirty && emailError && (
          <div className={style.registrationForm__form_email_error}>
            {emailError}
          </div>
        )}
        <div className={style.authForm__form_email}>
          <label htmlFor="email">Email: </label>
          <input
            type="email"
            name="email"
            value={email}
            onChange={(event) => handleEmail(event)}
            onBlur={(e) => handleBlur(e)}
          />
        </div>

        <div className={style.authForm__form_password}>
          <label htmlFor="password">Пароль:</label>
          <input
            type="passwordw"
            name="password"
            value={password}
            onChange={(event) => setPassword(event.target.value)}
          />
        </div>

        <button className={style.authForm__form_btn} type="submit">
          Вход
        </button>
      </form>
      <Link to="/auth/reg">Зарегистрироваться</Link>
    </div>
  );
};

export default AuthForm;
