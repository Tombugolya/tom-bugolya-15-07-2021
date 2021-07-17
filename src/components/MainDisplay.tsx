import ResultsDisplay from './ResultsDisplay';
import WeatherDisplay from './WeatherDisplay';
import { FC } from 'react';
import { useAppSelector } from '../hooks/hooks';
import { Box } from '@material-ui/core';

const MainDisplay: FC = () => {
  const results = useAppSelector((state) => state.weather.searchResults);

  return (
    <Box width="90%" minHeight="78vh" bgcolor="primary.main">
      {results.length ? <ResultsDisplay /> : <WeatherDisplay />}
    </Box>
  );
};

export default MainDisplay;
