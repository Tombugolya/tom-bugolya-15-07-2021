import AccuWeatherAPI, { FiveDayForecastResponse } from '../api/AccuWeatherAPI';
import { FC } from 'react';
import { Card, CardActionArea, CardContent, Grid } from '@material-ui/core';
import { useAppSelector } from '../hooks/hooks';

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
    <Grid direction="row" justifyContent="center" container spacing={5}>
      {forecast.DailyForecasts.map((forecast, index) => {
        const max = forecast.Temperature.Maximum;
        const min = forecast.Temperature.Minimum;
        return (
          <Grid style={{ margin: '2em', minWidth: '20em' }} item key={index}>
            <Card>
              <CardActionArea>
                <CardContent style={{ textAlign: 'center' }}>
                  <h3>{getDayFromEpoch(forecast.EpochDate)}</h3>
                  <div>
                    <h4>Day</h4>
                    <img
                      src={AccuWeatherAPI.getImageUrl(forecast.Day.Icon)}
                      alt="day-weather-icon"
                    />
                  </div>
                  <h4>Range {getTemperatureRange(min, max)}</h4>
                  <div>
                    <img
                      src={AccuWeatherAPI.getImageUrl(forecast.Night.Icon)}
                      alt="night-weather-icon"
                    />
                    <h4>Night</h4>
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
