import useAsyncEffect from 'use-async-effect';
import AccuWeatherAPI, { CombinedData } from '../api/AccuWeatherAPI';
import FavoritesGrid from '../components/Favorites/FavoritesGrid';
import { FC, useState } from 'react';
import { useAppSelector } from '../hooks/hooks';
import { Typography, useMediaQuery, useTheme } from '@material-ui/core';

const Favorites: FC = () => {
  const favorites = useAppSelector((state) => state.weather.favorites);
  const [combinedData, setCombinedData] = useState<CombinedData[]>([]);
  const [mount, setMount] = useState<boolean>(false);
  const theme = useTheme();
  const mediumScreenBreakpoint = useMediaQuery(theme.breakpoints.up('md'));

  useAsyncEffect(async () => {
    const combinedDataArray = await Promise.all(
      favorites.map(
        async (key: string) => await AccuWeatherAPI.getCombinedData(key)
      )
    );
    setCombinedData(combinedDataArray);
    setMount(true);
    return () => setMount(false);
  }, []);

  return (
    <>
      <Typography
        variant="h2"
        style={{
          margin: '1em',
          fontSize: mediumScreenBreakpoint ? '4em' : '3em',
        }}
        color="textPrimary"
      >
        Your Favorite Locations
      </Typography>
      {mount && <FavoritesGrid combinedDataArray={combinedData} />}
    </>
  );
};

export default Favorites;
