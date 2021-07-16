import Search from '../components/Search';
import MainDisplay from '../components/MainDisplay';
import AccuWeatherAPI from '../api/AccuWeatherAPI';
import useAsyncEffect from 'use-async-effect';
import { FC, useState } from 'react';
import { Box } from '@material-ui/core';
import {
  getCurrentPositionKey,
  WeatherActionCode,
} from '../store/reducers/weatherReducer';
import { useAppDispatch } from '../hooks/hooks';

const Home: FC = () => {
  //const dispatch = useAppDispatch();
  const [mount, setMount] = useState<boolean>(false);
  useAsyncEffect(async () => {
    // const key = await getCurrentPositionKey();
    // const [conditions, info, fiveDayForecast] = await Promise.all([
    //   AccuWeatherAPI.getCurrentConditions(key),
    //   AccuWeatherAPI.getLocationInfoByKey(key),
    //   AccuWeatherAPI.getFiveDayForecast(key),
    // ]);
    // dispatch({
    //   type: WeatherActionCode.CHANGE_CURRENT,
    //   payload: { current: { info, conditions, fiveDayForecast } },
    // });
    setMount(true);
  }, []);

  return (
    <Box
      display="flex"
      height="90vh"
      alignItems="center"
      justifyContent="space-around"
      flexDirection="column"
    >
      <Search />
      {mount && <MainDisplay />}
    </Box>
  );
};

export default Home;
