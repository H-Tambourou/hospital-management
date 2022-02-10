import React from 'react';
import { useSelector } from 'react-redux';
import Card from '../components/Card';
import img1 from '../assets/illustration1.png';

const Home = function Home() {
  const appointments = useSelector((state) => state.appointments);
  return (
    <div className="home section">
      <div className="home-Top">
        <Card
          name="Appointments"
          total={appointments.filter((appointment) => appointment.status === false).length}
        />
        <Card
          name="Checked in"
          total={appointments.filter((appointment) => appointment.status === true).length}
        />
      </div>
      <center>
        <img className="home-Illustration" src={img1} alt="" style={{ width: '100%' }} />{' '}
      </center>
      <span className="home-Span"> Our mission is to better manage healthcare.</span>
    </div>
  );
};
export default Home;
