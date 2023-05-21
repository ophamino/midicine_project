import React from 'react';
import style from './RegistrationForm.module.css';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import { URL_API_REG } from '../../urls';
import AuthForm from '../AuthForm/AuthForm';

const RegistrationForm = () => {
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

  const [firstName, setFirstName] = React.useState('');
  const [lastName, setLastName] = React.useState('');
  const [phone, setPhone] = React.useState();
  const [email, setEmail] = React.useState('');
  const [emailDirty, setEmailDirty] = React.useState(false);
  const [emailError, setEmailError] = React.useState(
    'Email не может быть пустым'
  );
  const [password, setPassword] = React.useState('');
  const [passwordDirty, setPasswordDirty] = React.useState(false);
  const [passwordError, setPasswordError] = React.useState(
    'Пароль не может быть пустым'
  );
  const [formValid, setFormValid] = React.useState(false);
  const [status, setStatus] = React.useState(false);
  const navigate = useNavigate();

  React.useEffect(() => {
    if (emailError || passwordError) {
      setFormValid(false);
    } else {
      setFormValid(true);
    }
  }, [emailError, passwordError]);

  React.useEffect(() => {
    if (status) {
      authUser();
    }
  }, [status]);

  const createUser = async () => {
    try {
      const body = {
        first_name: firstName,
        last_name: lastName,
        phone: phone,
        email: email,
        password: password,
      };
      const response = await axios
        .post(URL_API_REG, body)
        .then((data) => {
          console.log(data);
          if (data.status == 201) {
            setStatus(true);
          }
        })
        .catch((data) => console.log(data));
    } catch (error) {}
  };

  const handleCreateUser = (event) => {
    createUser();
    event.preventDefault();
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

  const handlePassword = (e) => {
    setPassword(e.target.value);
    if (e.target.value.length > 8) {
      // Пароль имеет достаточную длину (больше 8 символов)
      setPasswordError('');

      // Проверка наличия английских букв
      const hasEnglishLetters = /[a-zA-Z]/.test(e.target.value);
      if (hasEnglishLetters) {
        // Пароль содержит английские буквы
        setPasswordError('');
      } else {
        setPasswordError('Пароль не содержит английских букв');
      }
    } else {
      // Пароль слишком короткий
      setPasswordError(' Пароль имеет менее 8 символов');
    }
  };

  const handleBlur = (e) => {
    switch (e.target.name) {
      case 'email':
        setEmailDirty(true);
        break;
      case 'password':
        setPasswordDirty(true);
        break;
    }
  };

  return (
    <div className={style.registrationForm}>
      <form
        className={style.registrationForm__form}
        onSubmit={handleCreateUser}
      >
        <div className={style.registrationForm__form_firstName}>
          <p className={style.registrationForm__form_firstName_placeholder}>
            Имя
          </p>

          <input
            type="text"
            name="firstName"
            placeholder="Магомед"
            value={firstName}
            onChange={(event) => setFirstName(event.target.value)}
          />
        </div>

        <div className={style.registrationForm__form_lastName}>
          <p className={style.registrationForm__form_lastName_placeholder}>
            Фамилия
          </p>

          <input
            type="text"
            name="lastName"
            placeholder="Магомедов"
            value={lastName}
            onChange={(event) => setLastName(event.target.value)}
          />
        </div>

        <div className={style.registrationForm__form_phone}>
          <p className={style.registrationForm__form_phone_placeholder}>
            Телефон
          </p>
          <input
            type="tel"
            name="phone"
            placeholder="+7(000)-000-00-00"
            value={phone}
            onChange={(event) => setPhone(parseInt(event.target.value))}
          />
        </div>

        {emailDirty && emailError && (
          <div className={style.registrationForm__form_email_error}>
            {emailError}
          </div>
        )}
        <div className={style.registrationForm__form_email}>
          <p className={style.registrationForm__form_email_placeholder}>
            Email
          </p>
          <input
            type="email"
            name="email"
            placeholder="test@gmail.com"
            value={email}
            onChange={(event) => handleEmail(event)}
            onBlur={(e) => handleBlur(e)}
          />
        </div>
        {passwordDirty && passwordError && (
          <div className={style.registrationForm__form_password_error}>
            {passwordError}
          </div>
        )}
        <div className={style.registrationForm__form_password}>
          <p className={style.registrationForm__form_password_placeholder}>
            Password
          </p>
          <input
            type="password"
            name="password"
            placeholder="password"
            value={password}
            onChange={(event) => handlePassword(event)}
            onBlur={(e) => handleBlur(e)}
          />
        </div>

        <button
          className={style.registrationForm__form_btn}
          type="sumbit"
          disabled={!formValid}
        >
          Зарегистрироваться
        </button>
        {status && (
          <>
            <AuthForm />
            <p className={style.registrationForm__form_status}>
              Регистрация прошла успешно
            </p>
          </>
        )}
      </form>
    </div>
  );
};

export default RegistrationForm;
