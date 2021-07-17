import WeatherSummary from './WeatherSummary';
import AddToFavoritesWidget from './AddToFavoritesWidget';
import FiveDayForecastWidget from './FiveDayForecastWidget';
import { FC, memo } from 'react';
import { useAppSelector } from '../../../../hooks/hooks';
import { Box, Typography, useMediaQuery, useTheme } from '@material-ui/core';

const WeatherDisplay: FC = () => {
  const current = useAppSelector((state) => state.weather.current);
  const { conditions, info, fiveDayForecast } = current;
  const theme = useTheme();
  const mediumScreenBreakpoint = useMediaQuery(theme.breakpoints.up('md'));

  return (
    <Box
      display="flex"
      justifyContent="space-between"
      flexDirection="column"
      alignItems="center"
    >
      {current && (
        <>
          <Box
            display="flex"
            width={mediumScreenBreakpoint ? '80%' : '95%'}
            justifyContent="space-between"
            alignItems="center"
          >
            <WeatherSummary conditions={conditions} info={info} />
            <AddToFavoritesWidget info={info} />
          </Box>
          <Box style={{ margin: '0 auto' }} color="primary.main">
            <Typography
              variant="h2"
              color="textPrimary"
              style={{ fontSize: mediumScreenBreakpoint ? '4em' : '3em' }}
            >
              {current.conditions.WeatherText}
            </Typography>
          </Box>
          <FiveDayForecastWidget forecast={fiveDayForecast} />
        </>
      )}
    </Box>
  );
};

export default memo(WeatherDisplay);
