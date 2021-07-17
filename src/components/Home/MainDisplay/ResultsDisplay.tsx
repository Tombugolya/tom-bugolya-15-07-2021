import AccuWeatherAPI, {
  LocationInfoResponse,
} from '../../../api/AccuWeatherAPI';
import { WeatherActionCode } from '../../../store/reducers/weatherReducer';
import { FC } from 'react';
import { useAppDispatch, useAppSelector } from '../../../hooks/hooks';
import {
  Card,
  CardActionArea,
  CardContent,
  Grid,
  Typography,
  useMediaQuery,
  useTheme,
} from '@material-ui/core';

const ResultsDisplay: FC = () => {
  const results = useAppSelector((state) => state.weather.searchResults);
  const dispatch = useAppDispatch();
  const theme = useTheme();
  const largeScreenBreakpoint = useMediaQuery(theme.breakpoints.up('lg'));

  const onCardSelected = (selected: LocationInfoResponse) => {
    const key = selected.Key;
    AccuWeatherAPI.getCombinedDataCallback(
      key,
      ([conditions, info, fiveDayForecast]) => {
        dispatch({ type: WeatherActionCode.RETURN });
        dispatch({
          type: WeatherActionCode.CHANGE_CURRENT,
          payload: { current: { conditions, info, fiveDayForecast } },
        });
      }
    );
  };

  return (
    <Grid container direction="row" justifyContent="center" alignItems="center">
      {results.map((info, index) => (
        <Grid
          style={{ margin: '1em', textAlign: 'center' }}
          item
          key={index}
          xs={12}
          lg={2}
        >
          <Card
            style={{
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
            }}
          >
            <CardActionArea
              style={{ minHeight: largeScreenBreakpoint ? '20vh' : '10vh' }}
              onClick={() => onCardSelected(info)}
            >
              <CardContent>
                <Typography>
                  {info.LocalizedName}, {info.AdministrativeArea.LocalizedName},{' '}
                  {info.Country.LocalizedName}
                </Typography>
              </CardContent>
            </CardActionArea>
          </Card>
        </Grid>
      ))}
    </Grid>
  );
};

export default ResultsDisplay;
