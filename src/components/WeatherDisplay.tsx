import WeatherSummary from './WeatherSummary';
import AddToFavoritesWidget from './AddToFavoritesWidget';
import FiveDayForecastWidget from './FiveDayForecastWidget';
import { FC, memo } from 'react';
import { useAppSelector } from '../hooks/hooks';
import { Box } from '@material-ui/core';

const WeatherDisplay: FC = () => {
  const current = useAppSelector((state) => state.weather.current);
  const { conditions, info, fiveDayForecast } = current;

  return (
    <Box
      height="100%"
      display="flex"
      justifyContent="space-around"
      flexDirection="column"
      alignItems="center"
    >
      {current && (
        <>
          <Box
            display="flex"
            width="80%"
            justifyContent="space-between"
            alignItems="center"
          >
            <WeatherSummary conditions={conditions} info={info} />
            <AddToFavoritesWidget info={info} />
          </Box>
          <Box style={{ margin: '0 auto' }} color="secondary.main">
            <h1 style={{ fontSize: '4em' }}>
              "{current.conditions.WeatherText}"
            </h1>
          </Box>
          <FiveDayForecastWidget forecast={fiveDayForecast} />
        </>
      )}
    </Box>
  );
};

export default memo(WeatherDisplay);
