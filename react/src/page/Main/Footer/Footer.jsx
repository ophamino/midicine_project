import React from 'react';
import style from './Footer.module.css';

const Footer = () => {
  return (
    <div className={style.footer}>
      <hr className={style.footer__hr} />
      <div className={style.footer__menu}>
        <div className={style.footer__menu_logo}>MedSkillz</div>
        <ul className={style.footer__menu_list}>
          <li className={style.footer__menu_list_item_first}>
            <a href="#" className={style.footer__menu_llist_item_link}>
              Hackathon 2023
            </a>
          </li>
          <li className={style.footer__menu_list_item}>
            <a href="#" className={style.footer__menu_llist_item_link}>
              inno - agents
            </a>
          </li>
          <li className={style.footer__menu_list_item}>
            <a href="#" className={style.footer__menu_llist_item_link}>
              Privacy policy
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Footer;
