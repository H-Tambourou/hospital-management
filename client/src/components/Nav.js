import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { NavLink, useLocation } from 'react-router-dom';
import { logOut } from '../reducers/authorizationReducer';

const Nav = function Nav() {
  const dispatch = useDispatch();
  const [toggle, setToggle] = useState(false);
  const location = useLocation();

  if (location.pathname === '/login' || location.pathname === '/signup') {
    return null;
  }

  const handleLogOut = () => {
    dispatch(logOut());
  };

  return (
    <nav className="nav">
      <div className="navWrapper">
        <h1 className="company">HMS</h1>
        <div
          className={`menu ${toggle ? 'active' : ''}`}
          onClick={() => {
            setToggle(!toggle);
          }}
          onKeyPress={() => {
            setToggle(!toggle);
          }}
          role="button"
          tabIndex={0}
        >
          <span className="line" />
          <span className="line" />
          <span className="line" />
        </div>
        <ul className={`links ${toggle ? 'active' : ''}`}>
          <NavLink
            className="link"
            onClick={() => {
              setToggle(!toggle);
            }}
            onKeyPress={() => {
              setToggle(!toggle);
            }}
            style={({ isActive }) => ({ color: isActive ? '#336CFB' : '' })}
            to="/"
          >
            Home
          </NavLink>
          <NavLink
            className="link"
            onClick={() => {
              setToggle(!toggle);
            }}
            onKeyPress={() => {
              setToggle(!toggle);
            }}
            style={({ isActive }) => ({ color: isActive ? '#336CFB' : '' })}
            to="checkings"
          >
            Checked in
          </NavLink>
          <NavLink
            className="link"
            onClick={() => {
              setToggle(!toggle);
            }}
            onKeyPress={() => {
              setToggle(!toggle);
            }}
            style={({ isActive }) => ({ color: isActive ? '#336CFB' : '' })}
            to="appointments"
          >
            Appointments
          </NavLink>
          <div
            className="link"
            onClick={handleLogOut}
            onKeyPress={handleLogOut}
            role="button"
            tabIndex={0}
          >
            Log Out
          </div>
        </ul>
      </div>
    </nav>
  );
};
export default Nav;
