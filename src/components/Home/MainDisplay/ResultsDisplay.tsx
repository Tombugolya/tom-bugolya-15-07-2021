import AccuWeatherAPI, {
  LocationInfoResponse,
} from '../../../api/AccuWeatherAPI';
import {
  changeCurrent,
  returnToMainDisplay,
} from '../../../store/reducers/weatherReducer';
import { FC } from 'react';
import {
  useAppSelector,
  useAppDispatch,
  useMediaQueryBreakpoint,
} from '../../../hooks/hooks';
import {
  CardActionArea,
  CardContent,
  Grid,
  Typography,
  Card,
} from '@material-ui/core';

const ResultsDisplay: FC = () => {
  const results = useAppSelector((state) => state.weather.searchResults);
  const dispatch = useAppDispatch();
  const largeScreenBreakpoint = useMediaQueryBreakpoint('lg');

  const onCardSelected = (selected: LocationInfoResponse) => {
    const key = selected.Key;
    AccuWeatherAPI.getCombinedDataCallback(
      key,
      ([conditions, info, fiveDayForecast]) => {
        dispatch(returnToMainDisplay());
        dispatch(changeCurrent({ conditions, info, fiveDayForecast }));
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
