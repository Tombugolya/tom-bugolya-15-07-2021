import AccuWeatherAPI from '../api/AccuWeatherAPI';
import useAsyncEffect from 'use-async-effect';
import { FC, useState } from 'react';
import { useAppSelector } from '../hooks/hooks';

const WeatherDisplay: FC = () => {
  const current = useAppSelector((state) => state.weather.current);
  const celsius = useAppSelector((state) => state.weather.celsius);

  const [weatherText, setWeatherText] = useState<string>();
  const [weatherIcon, setWeatherIcon] = useState<number>();
  const [temperature, setTemperature] = useState<number>();

  useAsyncEffect(async () => {
    const result = await AccuWeatherAPI.currentConditions(current);
    setWeatherText(result.WeatherText);
    setWeatherIcon(result.WeatherIcon);
    setTemperature(result.Temperature[celsius ? 'Metric' : 'Imperial'].Value);
  });
  return (
    <div style={{ color: 'white' }}>
      {weatherText} {weatherIcon} {temperature} {celsius ? '°C' : '°F'}
    </div>
  );
};

export default WeatherDisplay;
