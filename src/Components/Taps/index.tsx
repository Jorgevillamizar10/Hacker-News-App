import React from 'react';
import './styles.css';

interface TapsProps {
  active: string;
  setActive: React.ComponentState;
};

const Taps:React.FC<TapsProps>  = ({ active, setActive })=> {

  return (
    <section className="container-taps">
      <button className={ active === 'All' ? "button-one-active" : "button-one-disabled" } onClick={() => setActive('All') }>
        All
      </button>
      <button className={ active === 'Faves' ? "button-two-active" : "button-disabled"} onClick={() =>  setActive('Faves') }> 
        My faves
      </button>
    </section>
  );

}

export default Taps;