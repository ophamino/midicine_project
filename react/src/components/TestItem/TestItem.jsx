import React from 'react';
import style from './TestItem.module.css';
import played from '../../assets/icon/played.svg';
import saved from '../../assets/icon/saved.svg';
import test_l from '../../assets/test_l.jpg';
import { Link } from 'react-router-dom';

const TestItem = ({ nameSpecialization, questionsDescription, testId }) => {
  return (
    <div className={style.testItem}>
      <div className={style.testItem__previe}>
        <img src={test_l} alt="" className={style.testItem__privie_img} />
      </div>

      <div className={style.testItem__text}>
        <p className={style.testItem_text_specialization}>
          {nameSpecialization}
        </p>
        <p className={style.testItem_text_description}>
          {questionsDescription}
        </p>
      </div>

      <div className={style.testItem__active_btns}>
        <button className={style.testItem__active_btns_saved}>
          <img src={saved} alt="saved" />
        </button>
        <Link
          to={`/quiz/${testId}`}
          className={style.testItem__active_btns_saved}
        >
          <img src={played} alt="played" />
        </Link>
      </div>
    </div>
  );
};

export default TestItem;
