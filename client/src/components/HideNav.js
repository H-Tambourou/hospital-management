import React from 'react';
import { useSelector } from 'react-redux';
import PropTypes from 'prop-types';

const HideNav = function HideNav({ Component }) {
  const user = useSelector((state) => state.user);
  return user.loggedIn ? <Component /> : '';
};

HideNav.propTypes = {
  Component: PropTypes.func.isRequired,
};

export default HideNav;
