import React from 'react';
import Header from './Components/Header/index';
import { Routes } from './Routes';

import './Styles/App.css';

const App:React.FC = () => {

  return (
    <div className="container">
      <Header />
      <Routes />
    </div>
  );
}

export default App;
