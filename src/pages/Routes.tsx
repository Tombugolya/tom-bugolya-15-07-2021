import Home from './Home';
import Favorites from './Favorites';
import Navbar from '../components/Navbar';
import { FC } from 'react';
import { Switch, Route } from 'react-router-dom';

const Routes: FC = () => {
  return (
    <>
      <Navbar />
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/favorites" exact component={Favorites} />
      </Switch>
    </>
  );
};

export default Routes;
