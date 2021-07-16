import Search from '../components/Search';
import MainDisplay from '../components/MainDisplay';
import useAsyncEffect from 'use-async-effect';
import { FC } from 'react';
import { Box } from '@material-ui/core';
import {
  getCurrentPosition,
  WeatherActionCode,
} from '../store/reducers/weatherReducer';
import { useAppDispatch } from '../hooks/hooks';

const Home: FC = () => {
  const dispatch = useAppDispatch();
  useAsyncEffect(async () => {
    const position = await getCurrentPosition();
    console.log('get current position', position);
    dispatch({
      type: WeatherActionCode.CHANGE_CURRENT,
      payload: { key: position },
    });
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
      <MainDisplay />
    </Box>
  );
};

export default Home;
