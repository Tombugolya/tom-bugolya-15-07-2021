import AccuWeatherAPI, { CombinedData } from '../api/AccuWeatherAPI';
import { FC } from 'react';
import { WeatherActionCode } from '../store/reducers/weatherReducer';
import {
  Card,
  CardActionArea,
  CardContent,
  Grid,
  Typography,
} from '@material-ui/core';
import { useAppDispatch, useAppSelector } from '../hooks/hooks';
import { useHistory } from 'react-router-dom';

interface FavoritesGridProps {
  combinedDataArray: CombinedData[];
}

const FavoritesGrid: FC<FavoritesGridProps> = ({ combinedDataArray }) => {
  const celsius = useAppSelector((state) => state.weather.celsius);
  const history = useHistory();
  const dispatch = useAppDispatch();

  const onCardClick = (combinedData: CombinedData) => {
    const [conditions, info, fiveDayForecast] = combinedData;
    dispatch({
      type: WeatherActionCode.CHANGE_CURRENT,
      payload: { current: { conditions, info, fiveDayForecast } },
    });
    history.push('/');
  };

  return (
    <Grid
      style={{ width: '90%' }}
      direction="row"
      justifyContent="center"
      container
      spacing={5}
    >
      {combinedDataArray.map((combinedData, index) => {
        const [conditions, info] = combinedData;
        const temperature = celsius
          ? conditions.Temperature.Metric.Value
          : conditions.Temperature.Imperial.Value;
        const unit = celsius ? 'C' : 'F';
        return (
          <Grid style={{ margin: '2em', minWidth: '20em' }} item key={index}>
            <Card>
              <CardActionArea onClick={() => onCardClick(combinedData)}>
                <CardContent style={{ textAlign: 'center' }}>
                  <Typography>{info.LocalizedName}</Typography>
                  <Typography>
                    {temperature}° {unit}
                  </Typography>
                  <div>
                    <img
                      src={AccuWeatherAPI.getImageUrl(conditions.WeatherIcon)}
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
  );
};

export default FavoritesGrid;
