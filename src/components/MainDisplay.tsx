import ResultsDisplay from './ResultsDisplay';
import WeatherDisplay from './WeatherDisplay';
import { FC } from 'react';
import { useAppSelector } from '../hooks/hooks';
import { Box } from '@material-ui/core';

const MainDisplay: FC = () => {
  const results = useAppSelector((state) => state.weather.searchResults);

  return (
    <Box
      display="flex"
      justifyContent="center"
      width="100%"
      minHeight="75vh"
      bgcolor="background.default"
    >
      {results.length ? <ResultsDisplay /> : <WeatherDisplay />}
    </Box>
  );
};

export default MainDisplay;
