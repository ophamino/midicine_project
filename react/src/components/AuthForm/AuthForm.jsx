import React from 'react';
import style from './AuthForm.module.css';
import { Link, useNavigate } from 'react-router-dom';
import { URL_API_LOGIN } from '../../urls';
import axios from 'axios';
import loginIcon from '../../assets/icon/login.svg';
import passwordIcon from '../../assets/icon/password.svg';

const AuthForm = () => {
  const [email, setEmail] = React.useState('');
  const [emailDirty, setEmailDirty] = React.useState(false);
  const [emailError, setEmailError] = React.useState(
    'Email не может быть пустым'
  );
  const [password, setPassword] = React.useState('');

  const [token, setToken] = React.useState('');
  const [status, setStatus] = React.useState(false);
  const navigate = useNavigate();

  React.useEffect(() => {
    if (status) {
      const timeoutId = setTimeout(() => {
        navigate('/', { replace: true });
      }, 2000);

      return () => clearTimeout(timeoutId);
    }
  }, [status]);

  const authUser = async () => {
    try {
      const body = {
        email: email,
        password: password,
      };
      const response = await axios
        .post(URL_API_LOGIN, body, {
          headers: {
            'Content-Type': 'application/json',
          },
        })
        .then((data) => {
          console.log(data);
          sessionStorage.setItem('token', JSON.stringify(data.data.auth_token));

          if (data.status == 200) {
            setStatus(true);
          }
        });

      // Сохранение токена в состоянии

      console.log('Вход выполнен, получен токен:');
    } catch (error) {
      console.error('Ошибка входа:', error);
    }
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
          <div className={style.authForm__form_email_error}>{emailError}</div>
        )}
        <div className={style.authForm__form_email}>
          <p className={style.authForm__form_email_placeholder}>Email</p>
          <div className={style.input_icon_email}>
            <input
              type="email"
              name="email"
              placeholder="test@gmail.com"
              value={email}
              onChange={(event) => handleEmail(event)}
              onBlur={(e) => handleBlur(e)}
            />

            <img src={loginIcon} alt="loginIcon" />
          </div>
        </div>

        <div className={style.authForm__form_password}>
          <p className={style.authForm__form_password_placeholder}>Пароль</p>
          <div className={style.input_icon_password}>
            <input
              type="password"
              name="password"
              placeholder="password"
              value={password}
              onChange={(event) => setPassword(event.target.value)}
            />
            <img src={passwordIcon} alt="passwordIcon" />
          </div>
        </div>

        <button className={style.authForm__form_btn} type="submit">
          Войти
        </button>
        <hr />

        <Link to="/auth" className={style.forgot_your_password}>
          Забыли пароль?
        </Link>
        {status && (
          <p className={style.registrationForm__form_status}>
            Авторизация прошла успешно
          </p>
        )}
      </form>
    </div>
  );
};

export default AuthForm;
