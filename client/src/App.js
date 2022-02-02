import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import './Responsive.css';
import HideNav from './components/HideNav';
import Private from './components/Private';
import Nav from './components/Nav';
import Home from './pages/Home';
import Appointments from './pages/Appointments';
import Checking from './pages/Checking';
import Login from './pages/Login';
import Signup from './pages/Signup';
import { retrieveUser } from './reducers/authorizationReducer';

const App = function App() {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.user);

  useEffect(() => {
    const credentials = window.localStorage.getItem('loggedUser');

    if (!user.loggedIn && credentials) {
      const userAuth = JSON.parse(credentials);
      dispatch(retrieveUser(userAuth));
    }
  }, [dispatch]);

  return (
    <BrowserRouter>
      <div className="App">
        <HideNav Component={Nav} />
        <Routes>
          <Route path="/" element={<Private Component={Home} />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="appointments" element={<Private Component={Appointments} />} />
          <Route path="checkings" element={<Private Component={Checking} />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
};

export default App;
