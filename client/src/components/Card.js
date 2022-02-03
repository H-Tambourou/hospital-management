import React from 'react';
import Icon1 from '../assets/HMS_ICON/appointment.png';

const Card = function Card() {
  return (
    <div className="card">
      <div className="cardIcon">
        <img src={Icon1} alt="" />
      </div>
      <div className="cardInfo">
        <p className="cardText">Appointments</p>
        <h1 style={{ color: '#336CFB' }}>200</h1>
      </div>
    </div>
  );
};
export default Card;
