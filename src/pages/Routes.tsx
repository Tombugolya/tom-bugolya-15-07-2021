import Home from './Home';
import Favorites from './Favorites';
import { FC } from 'react';
import { Route, Switch } from 'react-router-dom';

const Routes: FC = () => {
  return (
    <Switch>
      <Route path="/" exact component={Home} />
      <Route path="/favorites" exact component={Favorites} />
    </Switch>
  );
};

export default Routes;
