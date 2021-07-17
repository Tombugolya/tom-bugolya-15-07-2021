import AccuWeatherAPI, { LocationInfoResponse } from '../api/AccuWeatherAPI';
import { WeatherActionCode } from '../store/reducers/weatherReducer';
import { FC } from 'react';
import { useAppDispatch, useAppSelector } from '../hooks/hooks';
import {
  Card,
  CardActions,
  Button,
  CardActionArea,
  CardContent,
  Grid,
  Typography,
} from '@material-ui/core';

const ResultsDisplay: FC = () => {
  const results = useAppSelector((state) => state.weather.searchResults);
  const dispatch = useAppDispatch();

  const onCardSelected = (selected: LocationInfoResponse) => {
    const key = selected.Key;
    AccuWeatherAPI.getCombinedDataCallback(
      key,
      ([conditions, info, fiveDayForecast]) => {
        dispatch({
          type: WeatherActionCode.CHANGE_CURRENT,
          payload: { current: { conditions, info, fiveDayForecast } },
        });
        dispatch({ type: WeatherActionCode.RETURN });
      }
    );
  };
  return (
    <Grid container direction="row" justifyContent="center" spacing={10}>
      {results.map((info, index) => {
        return (
          <Grid style={{ margin: '1em' }} item key={index} xs={12} lg={2}>
            <Card>
              <CardActionArea>
                <CardContent>
                  <Typography>{info.LocalizedName},</Typography>
                  <Typography>
                    {info.AdministrativeArea.LocalizedName},
                  </Typography>
                  <Typography>{info.Country.LocalizedName}</Typography>
                </CardContent>
              </CardActionArea>
              <CardActions>
                <Button
                  style={{ margin: '0 auto' }}
                  color="secondary"
                  onClick={() => onCardSelected(info)}
                >
                  Choose
                </Button>
              </CardActions>
            </Card>
          </Grid>
        );
      })}
    </Grid>
  );
};

export default ResultsDisplay;
