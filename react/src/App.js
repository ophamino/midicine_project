import './App.css';

import Auth from './page/Auth/Auth';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Main from './page/Main/Main';
import Profile from './page/Profile/Profile';
import Test from './page/Test/Test';
import Quiz from './components/Quiz/Quiz';
import QuizCreator from './components/QuizCreator/QuizCreator';
import Telegram from './page/Telegram/Telegram';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Routes>
          <Route path="/auth" element={<Auth />} />

          <Route path="/" element={<Main />} />

          <Route path="/profile" element={<Profile />} />

          <Route path="/test" element={<Test />} />

          <Route path="/quiz/:id" element={<Quiz />} />

          <Route path="/qcreator" element={<QuizCreator />} />

          <Route path="/authtg" element={<Telegram />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
