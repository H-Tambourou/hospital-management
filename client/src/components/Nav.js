import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';

const Nav = function Nav() {
  const [toggle, setToggle] = useState(false);

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
            Checkings
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
        </ul>
      </div>
    </nav>
  );
};
export default Nav;
