import React from 'react';
import style from './AboutMe.module.css';
import { Link } from 'react-router-dom';
import back_to_home from '../../assets/icon/back_to_home.svg';
import axios from 'axios';
import { URL_API_ME } from '../../urls';

const AboutMe = () => {
  const [firstName, setFirstName] = React.useState('');
  const [lastName, setLastName] = React.useState('');
  const [phone, setPhone] = React.useState();
  const [email, setEmail] = React.useState('');

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
            setFirstName(data.data.first_name);
            setLastName(data.data.last_name);
            setPhone(data.data.phone);
            setEmail(data.data.email);

            console.log(data.data.first_name);
          });
      } catch (error) {}
    };

    getMe();
  }, []);

  return (
    <div className={style.aboutMe}>
      <div className={style.aboutMe_backToMain_btn}>
        <img src={back_to_home} alt="" />
        <Link to="/">Вернуться на главную</Link>
      </div>

      <div className={style.aboutMe__info}>
        <div className={style.aboutMe__info_lastName}>
          <p className={style.aboutMe__info_lastName_placeholder}>Фамилия</p>
          <p className={style.aboutMe__info_lastName_data}>{lastName}</p>
        </div>

        <div className={style.aboutMe__info_firstName}>
          <p className={style.aboutMe__info_firstName_placeholder}>Имя</p>
          <p className={style.aboutMe__info_firstName_data}>{firstName}</p>
        </div>

        <div className={style.aboutMe__info_phone}>
          <p className={style.aboutMe__info_phone_placeholder}>
            Номер телефона
          </p>
          <p className={style.aboutMe__info_phone_data}>{phone}</p>
        </div>

        <div className={style.aboutMe__info_email}>
          <p className={style.aboutMe__info_email_placeholder}>Email</p>
          <p className={style.aboutMe__info_email_data}>{email}</p>
        </div>

        <div className={style.aboutMe__info_validPassword}>
          <p className={style.aboutMe__info_validPassword_placeholder}>
            Введите старый пароль
          </p>
          <input
            className={style.aboutMe__info_validPassword_data}
            type="password"
          />
        </div>

        <div className={style.aboutMe__info_newPassword}>
          <p className={style.aboutMe__info_newPassword_placeholder}>
            Введите новый пароль
          </p>
          <input
            className={style.aboutMe__info_newPassword_data}
            type="password"
          />
        </div>

        <div className={style.aboutMe__info_newPasswordVerify}>
          <p className={style.aboutMe__info_newPasswordVerify_placeholder}>
            Подтвердите новый пароль
          </p>
          <input
            className={style.aboutMe__info_newPasswordVerify_data}
            type="password"
          />
        </div>
        <button className={style.aboutMe__info_btn}>Поменять пароль</button>
      </div>
    </div>
  );
};

export default AboutMe;
