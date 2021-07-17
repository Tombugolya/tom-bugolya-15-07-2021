import useAsyncEffect from 'use-async-effect';
import AccuWeatherAPI, { CombinedData } from '../api/AccuWeatherAPI';
import FavoritesGrid from '../components/FavoritesGrid';
import { FC, useState } from 'react';
import { useAppSelector } from '../hooks/hooks';
import { Typography } from '@material-ui/core';

const Favorites: FC = () => {
  const favorites = useAppSelector((state) => state.weather.favorites);
  const [combinedData, setCombinedData] = useState<CombinedData[]>([]);
  const [mount, setMount] = useState<boolean>(false);

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
      <Typography variant="h3" style={{ margin: '1em' }} color="textPrimary">
        Favorites Page
      </Typography>
      {mount && <FavoritesGrid combinedDataArray={combinedData} />}
    </>
  );
};

export default Favorites;
