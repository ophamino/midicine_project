import React from 'react';
import { Link } from 'react-router-dom';
import './ArticlePreview.css';
import article_img from '../../assets/article_img.jpg';

const ArticlePreview = ({ title, subtitle }) => {
  return (
    <div className="article-preview">
      <img src={article_img} alt="" className="article-preview-image" />
      <h2 className="article-preview-title">{title}</h2>
      <div className="article-preview-sL">
        <p className="article-preview-subtitle">{subtitle}</p>
        <Link to={`/`} className="article-preview-read-btn">
          Читать...
        </Link>
      </div>
    </div>
  );
};

export default ArticlePreview;
