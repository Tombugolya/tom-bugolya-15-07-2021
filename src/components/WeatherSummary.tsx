import AccuWeatherAPI, {
  CurrentConditionsResponse,
  LocationInfoResponse,
} from '../api/AccuWeatherAPI';
import { FC } from 'react';
import { Box } from '@material-ui/core';
import { useAppSelector } from '../hooks/hooks';

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
    <Box display="flex" width="30vw" alignItems="center" color="secondary.main">
      <div>
        <img
          src={AccuWeatherAPI.getImageUrl(WeatherIcon)}
          alt="weather-summary-icon"
        />
      </div>
      <Box>
        <h2>{LocalizedName}</h2>
        <h2>
          {temperature}° {celsius ? 'C' : 'F'}
        </h2>
      </Box>
    </Box>
  );
};

export default WeatherSummary;
