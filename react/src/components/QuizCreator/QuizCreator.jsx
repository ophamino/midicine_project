import React, { useState } from 'react';
import './QuizCreator.css';

const QuizCreator = () => {
  const [questions, setQuestions] = useState([
    { question: '', options: ['', ''] },
  ]);

  const handleQuestionChange = (e, index) => {
    const updatedQuestions = [...questions];
    updatedQuestions[index].question = e.target.value;
    setQuestions(updatedQuestions);
  };

  const handleOptionChange = (e, questionIndex, optionIndex) => {
    const updatedQuestions = [...questions];
    updatedQuestions[questionIndex].options[optionIndex] = e.target.value;
    setQuestions(updatedQuestions);
  };

  const handleAddQuestion = () => {
    setQuestions([...questions, { question: '', options: ['', ''] }]);
  };

  const handleAddOption = (questionIndex) => {
    const updatedQuestions = [...questions];
    updatedQuestions[questionIndex].options.push('');
    setQuestions(updatedQuestions);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Отправка данных квиза на сервер или другую обработку
    console.log(questions);
  };

  return (
    <div className="quiz-creator">
      <h2>Создания теста</h2>
      <form onSubmit={handleSubmit}>
        {questions.map((question, questionIndex) => (
          <div key={questionIndex}>
            <label>Вопрос {questionIndex + 1}</label>
            <input
              type="text"
              value={question.question}
              onChange={(e) => handleQuestionChange(e, questionIndex)}
              required
            />
            <div className="options-container">
              {question.options.map((option, optionIndex) => (
                <div key={optionIndex} className="option-input">
                  <input
                    type="text"
                    value={option}
                    onChange={(e) =>
                      handleOptionChange(e, questionIndex, optionIndex)
                    }
                    required
                  />
                  {optionIndex === question.options.length - 1 && (
                    <button
                      type="button"
                      onClick={() => handleAddOption(questionIndex)}
                    >
                      Добавить вариант ответа
                    </button>
                  )}
                </div>
              ))}
            </div>
          </div>
        ))}
        <button type="button" onClick={handleAddQuestion}>
          Добавить вопрос
        </button>
        <button type="submit" className="submit-button">
          Сохранить Тест
        </button>
      </form>
    </div>
  );
};

export default QuizCreator;
