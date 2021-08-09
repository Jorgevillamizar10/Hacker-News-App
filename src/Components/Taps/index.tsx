import React,{ useEffect } from 'react';
import { useHistory, useLocation  } from "react-router-dom";
import './styles.css';

interface TapsProps {
  active: string;
  setActive: React.ComponentState;
};

const Taps:React.FC<TapsProps>  = ({ active, setActive })=> {

  const history = useHistory();
  const location = useLocation();

  useEffect(() => {
    if(location.pathname === "/faves") setActive('Faves');
  },[location.pathname,setActive]);

  const onHandleClick = (status: string) => {
    if(status === 'All'){
      setActive('All');
      history.push("/");
    }else if(status === 'Faves'){
      setActive('Faves');
      history.push("/faves");
    }
  }

  return (
    <section className="container-taps">
      <button className={ active === 'All' ? "button-one-active" : "button-one-disabled" } onClick={() => onHandleClick('All') }>
        All
      </button>
      <button className={ active === 'Faves' ? "button-two-active" : "button-disabled"} onClick={() =>  onHandleClick('Faves') }> 
        My faves
      </button>
    </section>
  );

}

export default Taps;