import React from 'react';
import Header from './Header/Header';
import FirstScreen from './MainScreen/FirstScreen';
import TestScreen from './TestScreen/TestScreen';
import AboutUs from './AboutUs/AboutUs';
import Footer from './Footer/Footer';
import Articles from './Articles/Articles';

const Main = () => {
  return (
    <div className="container">
      <Header />
      <FirstScreen />
      <Articles />
      <TestScreen />
      <AboutUs />
      <Footer />
    </div>
  );
};

export default Main;
