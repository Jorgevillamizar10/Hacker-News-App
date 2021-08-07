import {useState } from "react";
import { Route, Switch, BrowserRouter } from "react-router-dom";
import Taps from '../Components/Taps/index';
import HomePage from '../Pages/Home';
import FavesPage from '../Pages/Faves';

export const Routes = () => {
  const [activeTap, setActiveTap] = useState('All');

  return(
    <BrowserRouter>
      <Taps active={activeTap} setActive={setActiveTap} />
      <Switch>
        <Route path="/">
          <HomePage />
        </Route>
        <Route path="/faves">
          <FavesPage />
        </Route>
      </Switch>
    </BrowserRouter>
  );
}