import React from 'react';
import style from './Test.module.css';
import testIcon from '../../assets/icon/test.svg';
import { Link } from 'react-router-dom';
import TestItem from '../../components/TestItem/TestItem';

const Test = () => {
  const [listTest, setListTest] = React.useState([]);

  return (
    <div className={style.test}>
      <div className="container">
        <div className={style.testBlock}>
          <div className={style.test__header}>
            <div className={style.test__header_logo}>
              <img
                src={testIcon}
                alt="Test Icon"
                className={style.test__header_img}
              />
              <h2 className={style.test__header_text}>Список тестов</h2>
            </div>

            <Link to="/profile" className={style.test__header_btn}>
              Личный кабинет
            </Link>
          </div>
          <div className={style.test_search}>
            <input type="text" className={style.test__search_input} />
          </div>

          <TestItem
            countQuestions={23}
            nameSpecialization="Хирургия"
            questionsDescription="О хирургии"
          />
        </div>
      </div>
    </div>
  );
};

export default Test;
