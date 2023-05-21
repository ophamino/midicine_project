import React from 'react';
import style from './FirstScreen.module.css';
import light from '../../../assets/firstScreen/light.svg';
import medical_employee from '../../../assets/firstScreen/medical_employee.png';

const FirstScreen = () => {
  return (
    <div className={style.firstScreen}>
      <div className={style.firstScreen__callToAction}>
        <div className={style.firstScreen__callToAction_HL}>
          <h1 className={style.firstScreen__callToAction_header}>
            Начни Тестирование Сейчас
          </h1>
          <img
            src={light}
            alt="light"
            className={style.firstScreen__callToAction_light}
          />
        </div>

        <p className={style.firstScreen__callToAction_subtitle}>
          Стань экспертом - проверь свои знания вместе с нами!
        </p>

        <button className={style.firstScreen__callToAction_letsStart}>
          Начнем?
        </button>
      </div>

      <div className="firstScreen__img">
        <img src={medical_employee} alt="Медицинский работник" />
      </div>
    </div>
  );
};

export default FirstScreen;
