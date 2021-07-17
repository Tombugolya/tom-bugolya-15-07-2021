import { FC } from 'react';
import { BrowserRouter } from 'react-router-dom';

const Router: FC = ({ children }) => {
  return (
    <BrowserRouter basename={process.env.PUBLIC_URL}>{children}</BrowserRouter>
  );
};

export default Router;
