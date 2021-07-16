import ReactDOM from 'react-dom';
import StoreProvider from './store/StoreProvider';
import ThemeProvider from './style/ThemeProvider';
import Routes from './pages/Routes';
import { FC } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';

const App: FC = () => {
  return (
    <StoreProvider>
      <ThemeProvider>
        <Router>
          <Routes />
        </Router>
      </ThemeProvider>
    </StoreProvider>
  );
};

ReactDOM.render(<App />, document.getElementById('root'));
