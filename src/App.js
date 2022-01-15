import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import './Responsive.css';
import Nav from './components/Nav';
import Home from './pages/Home';
import Appointments from './pages/Appointments';
import Checking from './pages/Checking';

const App = function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Nav />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="appointments" element={<Appointments />} />
          <Route path="checkings" element={<Checking />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
};

export default App;
