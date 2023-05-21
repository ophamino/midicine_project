import React, { useState } from 'react';
import { useParams } from 'react-router-dom';

import './Quiz.css';
import axios from 'axios';
import { URL_API_EXAM, URL_API_EXAM_A, URL_API_EXAM_Q } from '../../urls';
const Quiz = () => {
  const { id } = useParams();

  React.useEffect(() => {
    const getQuize = async () => {
      const tokenString = sessionStorage.getItem('token');

      const response = await axios
        .get(URL_API_EXAM + id + '/', {
          headers: {
            Authorization: 'Token ' + JSON.parse(tokenString),
          },
        })
        .then((data) => {
          setExam(data.data[0]);
          console.log(data.data[0]);
        });
    };
    const getQuestions = async () => {
      const tokenString = sessionStorage.getItem('token');

      const response = await axios
        .get(URL_API_EXAM_Q + id + '/', {
          headers: {
            Authorization: 'Token ' + JSON.parse(tokenString),
          },
        })
        .then((data) => {
          setQuestion(data.data[0]);
          console.log(data.data[0]);
        });
    };
    const getAnswer = async () => {
      const tokenString = sessionStorage.getItem('token');

      const response = await axios
        .get(URL_API_EXAM_A + id + '/', {
          headers: {
            Authorization: 'Token ' + JSON.parse(tokenString),
          },
        })
        .then((data) => {
          setAnswer(data.data[0]);
          console.log(data.data[0]);
        });
    };
    getQuize();
    getQuestions();
    getAnswer();
  }, []);

  const [exam, setExam] = useState([]);
  const [question, setQuestion] = useState([]);
  const [answer, setAnswer] = useState([]);

  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [showScore, setShowScore] = useState(false);

  const questions = [
    {
      question: 'What is the capital of France?',
      options: ['Paris', 'London', 'Berlin', 'Rome'],
      answer: 'Paris',
    },
    {
      question: 'Which planet is known as the Red Planet?',
      options: ['Mars', 'Venus', 'Jupiter', 'Saturn'],
      answer: 'Mars',
    },
    {
      question: 'Who painted the Mona Lisa?',
      options: [
        'Pablo Picasso',
        'Leonardo da Vinci',
        'Vincent van Gogh',
        'Claude Monet',
      ],
      answer: 'Leonardo da Vinci',
    },
  ];

  const handleAnswerOptionClick = (selectedAnswer) => {
    if (selectedAnswer === questions[currentQuestion].answer) {
      setScore(score + 1);
    }

    if (currentQuestion + 1 < questions.length) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      setShowScore(true);
    }
  };

  return (
    <div className="quiz-container">
      <h2 className="quiz-title">{exam.title}</h2>
      {showScore ? (
        <div className="quiz-score">
          <h3>Правильно ответили на : {score} вопроса</h3>
          <button
            className="quiz-restart-btn"
            onClick={() => setShowScore(false)}
          >
            Перезагрузить Тест
          </button>
        </div>
      ) : (
        <div className="quiz-question">
          <h3>Вопрос {currentQuestion + 1}</h3>
          <h4>Описание: {exam.discription}</h4>
          <p className="quiz-question-text">
            {questions[currentQuestion].question}
          </p>
          <ul className="quiz-options">
            {questions[currentQuestion].options.map((option, index) => (
              <li
                key={index}
                className="quiz-option"
                onClick={() => handleAnswerOptionClick(option)}
              >
                <input type="radio" id={index} name="answer" value={option} />
                <label htmlFor={index}>{option}</label>
              </li>
            ))}
          </ul>
          <button
            className="quiz-next-btn"
            onClick={() => handleAnswerOptionClick()}
          >
            Далее
          </button>
          <progress
            className="quiz-progress"
            value={currentQuestion + 1}
            max={questions.length}
          ></progress>
        </div>
      )}
    </div>
  );
};

export default Quiz;
