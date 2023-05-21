import React, { useState } from 'react';
import './Quiz.css';

const Quiz = () => {
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
      <h2 className="quiz-title">Quiz - Test Your Knowledge</h2>
      {showScore ? (
        <div className="quiz-score">
          <h3>Your Score: {score}</h3>
          <button
            className="quiz-restart-btn"
            onClick={() => setShowScore(false)}
          >
            Restart Quiz
          </button>
        </div>
      ) : (
        <div className="quiz-question">
          <h3>Question {currentQuestion + 1}</h3>
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
            Next
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
