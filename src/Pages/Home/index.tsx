import React,{ useState } from 'react';
import Header from '../../Components/Header/index';
import Taps from '../../Components/Taps/index';
import Articles from '../../Components/Articles/index';

import './styles.css';

const HomePage:React.FC = () => {
  const [activeTap, setActiveTap] = useState('All');

  return (
    <div className="container">
      <Header />
      <Taps active={activeTap} setActive={setActiveTap} />
      <Articles />
    </div>
  );

}

export default HomePage;