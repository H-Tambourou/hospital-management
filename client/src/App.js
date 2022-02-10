import React, { useEffect } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import './App.css';
import './Responsive.css';
import Private from './components/Private';
import Nav from './components/Nav';
import Home from './pages/Home';
import Appointments from './pages/Appointments';
import Checking from './pages/Checking';
import Login from './pages/Login';
import Signup from './pages/Signup';
import { initializeAppointments } from './reducers/appointmentReducer';

const App = function App() {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.user);

  useEffect(() => {
    if (user.loggedIn) {
      dispatch(initializeAppointments());
    }
  }, [user]);

  return (
    <BrowserRouter>
      <div className="App">
        <Nav />
        <Routes>
          <Route path="/" element={<Private Component={Home} />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/appointments" element={<Private Component={Appointments} />} />
          <Route path="/checkings" element={<Private Component={Checking} />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
};

export default App;
