import useAsyncEffect from 'use-async-effect';
import AccuWeatherAPI, { CombinedData } from '../api/AccuWeatherAPI';
import { FC, useState } from 'react';
import { useHistory } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from '../hooks/hooks';
import {
  Card,
  CardActionArea,
  CardContent,
  Grid,
  Typography,
} from '@material-ui/core';
import { WeatherActionCode } from '../store/reducers/weatherReducer';

const Favorites: FC = () => {
  const favorites = useAppSelector((state) => state.weather.favorites);
  const celsius = useAppSelector((state) => state.weather.celsius);
  const history = useHistory();
  const dispatch = useAppDispatch();
  const [favoritesInfo, setFavoritesInfo] = useState<CombinedData[]>([]);
  const [mount, setMount] = useState<boolean>(false);

  useAsyncEffect(async () => {
    const infoArray = await Promise.all(
      favorites.map(
        async (key: string) => await AccuWeatherAPI.getCombinedData(key)
      )
    );
    setFavoritesInfo(infoArray);
    setMount(true);
    return () => setMount(false);
  });

  const onCardClick = (combinedData: CombinedData) => {
    const [conditions, info, fiveDayForecast] = combinedData;
    dispatch({
      type: WeatherActionCode.CHANGE_CURRENT,
      payload: { current: { conditions, info, fiveDayForecast } },
    });
    history.push('/');
  };

  return (
    <>
      <h1>Favorites Page</h1>
      <Grid
        style={{ width: '90%' }}
        direction="row"
        justifyContent="center"
        container
        spacing={5}
      >
        {mount &&
          favoritesInfo.map((combinedData, index) => {
            const [conditions, info] = combinedData;
            const temperature = celsius
              ? conditions.Temperature.Metric.Value
              : conditions.Temperature.Imperial.Value;
            const unit = celsius ? 'C' : 'F';
            return (
              <Grid
                style={{ margin: '2em', minWidth: '20em' }}
                item
                key={index}
              >
                <Card>
                  <CardActionArea onClick={() => onCardClick(combinedData)}>
                    <CardContent style={{ textAlign: 'center' }}>
                      <Typography>{info.LocalizedName}</Typography>
                      <Typography>
                        {temperature}° {unit}
                      </Typography>
                      <div>
                        <img
                          src={AccuWeatherAPI.getImageUrl(
                            conditions.WeatherIcon
                          )}
                          alt={`favorites-weather-icon-${index}`}
                        />
                      </div>
                      <Typography>{conditions.WeatherText}</Typography>
                    </CardContent>
                  </CardActionArea>
                </Card>
              </Grid>
            );
          })}
      </Grid>
    </>
  );
};

export default Favorites;
