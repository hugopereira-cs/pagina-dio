import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import { Home } from './pages/Home/App';
import { Login } from './pages/login/App';
import { Feed } from './pages/feed/App';
import { Register } from './pages/register/App';
import { GlobalStyle } from './styles/global';
import { AuthContextProvider } from './context/auth';

function App() {
  return (
    <Router>
      <AuthContextProvider>
        <GlobalStyle />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/feed" element={<Feed />} />
          <Route path="/register" element={<Register />} />
        </Routes>
      </AuthContextProvider>
    </Router>
  );
}

ReactDOM.createRoot(document.getElementById('root') as Element | DocumentFragment ).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
