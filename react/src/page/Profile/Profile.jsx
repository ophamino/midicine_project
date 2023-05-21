import React from 'react';
import style from './Profile.module.css';
import ListProfile from '../../components/ListProfile/ListProfile';
import AboutMe from '../../components/AboutMe/AboutMe';

const Profile = () => {
  return (
    <div className={style.profile}>
      <div className="container">
        <div className={style.profileBlock}>
          <ListProfile />
          <AboutMe />
        </div>
      </div>
    </div>
  );
};

export default Profile;
