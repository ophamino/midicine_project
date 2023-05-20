import './App.css';

import Auth from './page/Auth/Auth';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Main from './page/Main/Main';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Routes>
          <Route path="/auth" element={<Auth />} />

          <Route path="/" element={<Main />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
