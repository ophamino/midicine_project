import React from 'react';
import style from './ListProfile.module.css';
import list_profile from '../../assets/icon/list_profile.svg';
import { Link } from 'react-router-dom';

const ListProfile = () => {
  return (
    <div className={style.listProfile}>
      <ul className={style.listProfile__list}>
        <li className={style.listProfile__list_item}>
          <img
            src={list_profile}
            alt=""
            className={style.listProfile__list_item_icon}
          />

          <Link className={style.listProfile__list_item_link} to="/profile">
            Личные данные
          </Link>
        </li>
        <hr />

        <li className={style.listProfile__list_item}>
          <img
            src={list_profile}
            alt=""
            className={style.listProfile__list_item_icon}
          />

          <Link className={style.listProfile__list_item_link} to="/profile">
            Пройденные тесты
          </Link>
        </li>
        <hr />

        <li className={style.listProfile__list_item}>
          <img
            src={list_profile}
            alt=""
            className={style.listProfile__list_item_icon}
          />

          <Link className={style.listProfile__list_item_link} to="/profile">
            Мои статьи
          </Link>
        </li>

        <hr />

        <li className={style.listProfile__list_item}>
          <img
            src={list_profile}
            alt=""
            className={style.listProfile__list_item_icon}
          />

          <Link className={style.listProfile__list_item_link} to="/profile">
            Закладки
          </Link>
        </li>

        <hr />

        <li className={style.listProfile__list_item}>
          <img
            src={list_profile}
            alt=""
            className={style.listProfile__list_item_icon}
          />

          <Link className={style.listProfile__list_item_link} to="/profile">
            Избранное
          </Link>
        </li>

        <hr />

        <li className={style.listProfile__list_item}>
          <img
            src={list_profile}
            alt=""
            className={style.listProfile__list_item_icon}
          />

          <Link className={style.listProfile__list_item_link} to="/profile">
            Топ - 10
          </Link>
        </li>
        <hr />
      </ul>
    </div>
  );
};

export default ListProfile;
