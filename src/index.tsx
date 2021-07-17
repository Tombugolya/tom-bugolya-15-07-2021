import ReactDOM from 'react-dom';
import StoreProvider from './store/StoreProvider';
import ThemeProvider from './style/ThemeProvider';
import Main from './pages/Main';
import { FC } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';

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
