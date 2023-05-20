import './App.css';
import AuthForm from './components/AuthForm/AuthForm';
import RegistrationForm from './components/RegistrationForm/RegistrationForm';
import Auth from './page/Auth';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <div className="auth">
          <div className="container">
            <Routes>
              <Route path="/auth" element={<Auth />} />
              <Route path="/auth/login" element={<AuthForm />} />
              <Route path="/auth/reg" element={<RegistrationForm />} />
            </Routes>
          </div>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
