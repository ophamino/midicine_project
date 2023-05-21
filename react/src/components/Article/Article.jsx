import React from 'react';
// import Quiz from './Quiz';

const Article = ({ article }) => {
  return (
    <div>
      <h2>{article.title}</h2>
      <p>{article.content}</p>
      {/* <Quiz /> */}
    </div>
  );
};

export default Article;
