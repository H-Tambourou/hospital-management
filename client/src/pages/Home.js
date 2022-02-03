import React from 'react';
import Card from '../components/Card';

import img1 from '../assets/illustration1.png';

const Home = function Home() {
  return (
    <div className="home section">
      <Card />
      <Card />
      <img src={img1} alt="" style={{ width: '100%' }} />
      <span className="homeSpan"> A better way to do healthcare</span>
    </div>
  );
};
export default Home;
