import React from 'react';
import Proptypes from 'prop-types';
import Icon1 from '../assets/HMS_ICON/appointment.png';

const Card = function Card({ name, total }) {
  return (
    <div className="card">
      <div className="cardIcon">
        <img src={Icon1} alt="" />
      </div>
      <div className="cardInfo">
        <p className="cardText">{name}</p>
        <h1 style={{ color: '#336CFB' }}>{total}</h1>
      </div>
    </div>
  );
};

Card.propTypes = {
  name: Proptypes.string.isRequired,
  total: Proptypes.number.isRequired,
};

export default Card;
