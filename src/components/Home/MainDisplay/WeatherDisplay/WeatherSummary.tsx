import AccuWeatherAPI, {
  CurrentConditionsResponse,
  LocationInfoResponse,
} from '../../../../api/AccuWeatherAPI';
import { FC } from 'react';
import { Box, Typography } from '@material-ui/core';
import { useAppSelector } from '../../../../hooks/hooks';

interface WeatherSummaryProps {
  conditions: CurrentConditionsResponse;
  info: LocationInfoResponse;
}

const WeatherSummary: FC<WeatherSummaryProps> = ({ conditions, info }) => {
  const { WeatherIcon, Temperature } = conditions;
  const { LocalizedName } = info;
  const celsius = useAppSelector((state) => state.weather.celsius);
  const temperature = Temperature[celsius ? 'Metric' : 'Imperial'].Value;
  return (
    <Box
      display="flex"
      width="30vw"
      alignItems="center"
      color="background.main"
      style={{ margin: '2em' }}
    >
      <div>
        <img
          src={AccuWeatherAPI.getImageUrl(WeatherIcon)}
          alt="weather-summary-icon"
        />
      </div>
      <Box>
        <Typography variant="h5" color="textPrimary">
          {LocalizedName}
        </Typography>
        <Typography variant="h5" color="textPrimary">
          {temperature}° {celsius ? 'C' : 'F'}
        </Typography>
      </Box>
    </Box>
  );
};

export default WeatherSummary;
