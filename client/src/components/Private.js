import React from 'react';
import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';
import PropTypes from 'prop-types';

const Private = function Private({ Component }) {
  const user = useSelector((state) => state.user);
  return user.loggedIn ? <Component /> : <Navigate to="/login" />;
};

Private.propTypes = {
  Component: PropTypes.func.isRequired,
};

export default Private;
