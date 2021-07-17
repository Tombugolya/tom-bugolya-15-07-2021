import AccuWeatherAPI, {
  FiveDayForecastResponse,
} from '../../../../api/AccuWeatherAPI';
import { FC } from 'react';
import {
  Card,
  CardActionArea,
  CardContent,
  Grid,
  Typography,
} from '@material-ui/core';
import { useAppSelector } from '../../../../hooks/hooks';

interface FiveDayForecastWidgetProps {
  forecast: FiveDayForecastResponse;
}

const FiveDayForecastWidget: FC<FiveDayForecastWidgetProps> = ({
  forecast,
}) => {
  const celsius = useAppSelector((state) => state.weather.celsius);
  const getDayFromEpoch = (epochTime: number): string => {
    const days = [
      'Sunday',
      'Monday',
      'Tuesday',
      'Wednesday',
      'Thursday',
      'Friday',
      'Saturday',
    ];
    return days[new Date(epochTime * 1000).getDay()];
  };
  const getTemperatureRange = (
    min: { Value: number; Unit: 'F' | 'C' },
    max: { Value: number; Unit: 'F' | 'C' }
  ): string => {
    const unit = min.Unit;
    const apiUnit = unit === 'C';
    if (apiUnit === celsius) return `${min.Value}°-${max.Value}° ${unit}`;
    if (min.Unit === 'F')
      return `${Math.round((min.Value - 30) / 2)}°-${Math.round(
        (max.Value - 30) / 2
      )}° C`;
    return `${Math.round(min.Value * 2 + 30)}°-${Math.round(
      max.Value * 2 + 30
    )}° F`;
  };

  return (
    <Grid direction="row" justifyContent="center" container>
      {forecast.DailyForecasts.map((forecast, index) => {
        const max = forecast.Temperature.Maximum;
        const min = forecast.Temperature.Minimum;
        return (
          <Grid style={{ margin: '2em', minWidth: '20em' }} item key={index}>
            <Card>
              <CardActionArea>
                <CardContent style={{ textAlign: 'center' }}>
                  <Typography variant="h6">
                    {getDayFromEpoch(forecast.EpochDate)}
                  </Typography>
                  <div>
                    <Typography>Day</Typography>
                    <img
                      src={AccuWeatherAPI.getImageUrl(forecast.Day.Icon)}
                      alt="day-weather-icon"
                    />
                  </div>
                  <Typography>Range {getTemperatureRange(min, max)}</Typography>
                  <div>
                    <img
                      src={AccuWeatherAPI.getImageUrl(forecast.Night.Icon)}
                      alt="night-weather-icon"
                    />
                    <Typography>Night</Typography>
                  </div>
                </CardContent>
              </CardActionArea>
            </Card>
          </Grid>
        );
      })}
    </Grid>
  );
};

export default FiveDayForecastWidget;
