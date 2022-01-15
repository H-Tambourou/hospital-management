import React from 'react';
import Feed from '../components/Feed';
import img1 from '../assets/illustration2.png';

const Appointment = function Appointment() {
  return (
    <div>
      <h1 style={{ padding: '2rem' }}>Appointments</h1>
      <img src={img1} style={{ width: '100%' }} alt="" />
      <Feed />
    </div>
  );
};
export default Appointment;
