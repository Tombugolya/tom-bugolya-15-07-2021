import ResultsDisplay from './ResultsDisplay';
import WeatherDisplay from './WeatherDisplay';
import { FC } from 'react';
import { useAppSelector } from '../hooks/hooks';
import { Box } from '@material-ui/core';

const MainDisplay: FC = () => {
  const results = useAppSelector((state) => state.weather.searchResults);

  return (
    <Box height="75vh" width="80vw" bgcolor="primary.main">
      {results.length ? <ResultsDisplay /> : <WeatherDisplay />}
    </Box>
  );
};

export default MainDisplay;
