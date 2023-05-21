import React, { useEffect } from 'react';
import style from './Header.module.css';
import { Link } from 'react-router-dom';
import { URL_API_LOGOUT, URL_API_ME } from '../../../urls';
import axios from 'axios';
import logo from '../../../assets/logo.svg';

const Header = () => {
  const [auth, setAuth] = React.useState(false);
  const [firstName, setFirstName] = React.useState('');

  React.useEffect(() => {
    const getMe = async () => {
      const tokenString = sessionStorage.getItem('token');
      try {
        const response = await axios
          .get(URL_API_ME, {
            headers: {
              Authorization: 'Token ' + JSON.parse(tokenString),
            },
          })
          .then((data) => {
            console.log(data);
            setAuth(true);
            setFirstName(data.data.first_name);
            console.log(data.data.first_name);
          });
      } catch (error) {}
    };

    getMe();
  }, []);

  const logout = async () => {
    const tokenString = sessionStorage.getItem('token');
    sessionStorage.removeItem('token');
    setAuth(false);
    try {
      const response = await axios
        .post(URL_API_LOGOUT, {
          header: {
            Authorization: 'Token ' + JSON.parse(tokenString),
          },
        })
        .then((data) => console.log(data))
        .catch((data) => console.log(data));
    } catch (error) {}
  };

  return (
    <header className={style.headers}>
      <div className={style.logo}>
        <img src={logo} alt="logo" className={style.logo__img} />
      </div>

      <nav className={style.headers__nav}>
        <ul className={style.nav__list}>
          <li className={style.nav__list_item}>
            <a className={style.nav__list_item_link}>Главная</a>
          </li>
          <li className={style.nav__list_item}>
            <a className={style.nav__list_item_link}>О нас</a>
          </li>
          <li className={style.nav__list_item}>
            <a className={style.nav__list_item_link}>Тесты</a>
          </li>
        </ul>
      </nav>
      <div className={style.auth}>
        {auth ? (
          <Link className={style.auth_btn_auth} to={'/profile'}>
            {firstName}
          </Link>
        ) : (
          <Link className={style.auth_btn} to={'/auth'}>
            Авторизация
          </Link>
        )}
      </div>
    </header>
  );
};

export default Header;
