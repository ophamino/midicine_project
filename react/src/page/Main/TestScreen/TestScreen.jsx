import React from 'react';
import style from './TestScreen.module.css';
import TestItem from '../../../components/TestItem/TestItem';

const TestScreen = () => {
  return (
    <div className={style.testScreen}>
      <div className={style.testScreen__info}>
        <h1 className={style.testScreen__info_header}>Тесты</h1>

        <p className={style.testScreen__info_subtitle}>
          Тесты предназначены для проверки знаний сотрудников медицинского
          учреждения.
        </p>

        <p className={style.testScreen__info_cout_test}>100+</p>
        <p className={style.testScreen__info_cout_test_subtitle}>
          Количество тестов
        </p>
      </div>

      <div className={style.testScreen__slader}>
        <TestItem />
      </div>
    </div>
  );
};

export default TestScreen;
