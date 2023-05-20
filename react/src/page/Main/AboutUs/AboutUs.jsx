import React from 'react';
import style from './AboutUs.module.css';
import fullLogo from '../../../assets/full_logo.svg';

const AboutUs = () => {
  return (
    <div className={style.aboutUs}>
      <div className={style.aboutUs__info}>
        <h1 className={style.aboutUs__info_header}>О нас</h1>

        <p className={style.aboutUs__info_subtitle}>
          <span className={style.aboutUs__info_subtitle_bold}>
            MedSkillz Team
          </span>
          - команда энтузиастов разработала для вас полезный продукт! С нашим
          продуктом, вы всегда сможете восполнить или же повысить уровень своего
          профecсионализма.
        </p>
      </div>

      <div className={style.aboutUs__logo}>
        <img src={fullLogo} alt="Logo" />
      </div>
    </div>
  );
};

export default AboutUs;
