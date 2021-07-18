import Search from '../components/Home/Search';
import MainDisplay from '../components/Home/MainDisplay/MainDisplay';
import ErrorDisplay from '../components/ErrorDisplay';
import AccuWeatherAPI from '../api/AccuWeatherAPI';
import useAsyncEffect from 'use-async-effect';
import { FC, useState } from 'react';
import {
  getCurrentPositionKey,
  WeatherActionCode,
} from '../store/reducers/weatherReducer';
import { useAppDispatch, useAppSelector } from '../hooks/hooks';

const Home: FC = () => {
  const dispatch = useAppDispatch();
  const current = useAppSelector((state) => state.weather.current);
  const [mount, setMount] = useState<boolean>(false);
  const [error, setError] = useState<boolean>(false);
  useAsyncEffect(async () => {
    if (current) {
      setMount(true);
      return;
    }
    const key = await getCurrentPositionKey();
    AccuWeatherAPI.getCombinedDataCallback(
      key,
      ([conditions, info, fiveDayForecast]) => {
        dispatch({
          type: WeatherActionCode.CHANGE_CURRENT,
          payload: { current: { info, conditions, fiveDayForecast } },
        });
        setMount(true);
      },
      () => setError(true)
    );
  }, []);

  return (
    <>
      <Search />
      {mount && <MainDisplay />}
      {error && <ErrorDisplay />}
    </>
  );
};

export default Home;
