import { FC } from 'react';
import { HeartFill, Heart } from 'react-bootstrap-icons';
import { Box, Button } from '@material-ui/core';
import { LocationInfoResponse } from '../api/AccuWeatherAPI';
import { useAppDispatch, useAppSelector } from '../hooks/hooks';
import { WeatherActionCode } from '../store/reducers/weatherReducer';

interface AddToFavoritesWidgetProps {
  info: LocationInfoResponse;
}

const AddToFavoritesWidget: FC<AddToFavoritesWidgetProps> = ({ info }) => {
  const { Key } = info;
  const dispatch = useAppDispatch();
  const favorites = useAppSelector((state) => state.weather.favorites);
  const isFavorited = favorites.includes(Key);

  const onAddToFavoritesClick = () => {
    if (isFavorited)
      dispatch({
        type: WeatherActionCode.REMOVE_FAVORITE,
        payload: { key: Key },
      });
    else
      dispatch({ type: WeatherActionCode.ADD_FAVORITE, payload: { key: Key } });
  };

  return (
    <Box
      color="secondary.main"
      display="flex"
      alignItems="center"
      justifyContent="space-around"
    >
      <Button color="secondary" onClick={onAddToFavoritesClick}>
        {isFavorited ? <HeartFill size={15} /> : <Heart size={15} />}
      </Button>
    </Box>
  );
};

export default AddToFavoritesWidget;
