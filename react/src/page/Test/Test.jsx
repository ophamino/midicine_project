import React from 'react';
import style from './Test.module.css';
import testIcon from '../../assets/icon/test.svg';
import { Link } from 'react-router-dom';
import TestItem from '../../components/TestItem/TestItem';
import axios from 'axios';
import { URL_API_EXAM_LIST } from '../../urls';

const Test = () => {
  const [listTest, setListTest] = React.useState([]);

  React.useEffect(() => {
    const getListExams = async () => {
      const tokenString = sessionStorage.getItem('token');

      try {
        const response = await axios
          .get(URL_API_EXAM_LIST, {
            headers: {
              Authorization: 'Token ' + JSON.parse(tokenString),
            },
          })
          .then((data) => {
            setListTest(data.data);
            console.log(data);
          });
      } catch (error) {}
    };
    getListExams();
  }, []);

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
          {listTest.map((el) => {
            return (
              <TestItem
                testId={el.id}
                nameSpecialization={el.title}
                questionsDescription={el.discription}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Test;
