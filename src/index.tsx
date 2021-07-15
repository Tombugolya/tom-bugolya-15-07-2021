import React, { FC } from 'react';
import ReactDOM from 'react-dom';
import StoreProvider from './store/StoreProvider';
import WeatherApp from './components/WeatherApp';
import ThemeProvider from './style/ThemeProvider';

const App: FC = () => {
  return (
    <React.StrictMode>
      <StoreProvider>
        <ThemeProvider>
          <WeatherApp />
        </ThemeProvider>
      </StoreProvider>
    </React.StrictMode>
  );
};

ReactDOM.render(<App />, document.getElementById('root'));
