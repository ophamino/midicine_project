import React from 'react';
import style from './Articles.module.css';
import ArticlePreview from '../../../components/ArticlePreview/ArticlePreview';

const Articles = () => {
  return (
    <div className={style.articles}>
      <div className={style.article__item}>
        <ArticlePreview
          title="COVID-19"
          subtitle="Аспергиллез головного мозга"
        />
      </div>
      <div className={style.articles__info}>
        <h1 className={style.arcticles__info_header}>Статьи</h1>
        <p className={style.arcticles__info_subtitle}>
          Статьи предназначены для более глубокого изучения материала. После
          прочтения статьи вам будет предложено пройти тест.
        </p>
      </div>
    </div>
  );
};

export default Articles;
