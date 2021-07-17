import ReactDOM from 'react-dom';
import StoreProvider from './store/StoreProvider';
import ThemeProvider from './style/ThemeProvider';
import Main from './pages/Main';
import Router from './routes/Router';
import { FC } from 'react';

const App: FC = () => {
  return (
    <StoreProvider>
      <ThemeProvider>
        <Router>
          <Main />
        </Router>
      </ThemeProvider>
    </StoreProvider>
  );
};

ReactDOM.render(<App />, document.getElementById('root'));
