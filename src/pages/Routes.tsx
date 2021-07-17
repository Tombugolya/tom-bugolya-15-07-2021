import routes from '../routes/routes';
import { FC } from 'react';
import { Route, Switch } from 'react-router-dom';

const Routes: FC = () => {
  return (
    <Switch>
      {Object.values(routes).map((route, index) => (
        <Route key={index} path={route.to} exact component={route.component} />
      ))}
    </Switch>
  );
};

export default Routes;
