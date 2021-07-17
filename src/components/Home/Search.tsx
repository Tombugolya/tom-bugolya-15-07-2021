import AccuWeatherAPI from '../../api/AccuWeatherAPI';
import { WeatherActionCode } from '../../store/reducers/weatherReducer';
import { FC, KeyboardEvent, useRef } from 'react';
import {
  Box,
  Button,
  TextField,
  useMediaQuery,
  useTheme,
} from '@material-ui/core';
import { useAppDispatch } from '../../hooks/hooks';

const Search: FC = () => {
  const textFieldRef = useRef<HTMLInputElement>();
  const dispatch = useAppDispatch();
  const theme = useTheme();
  const mediumScreenBreakpoint = useMediaQuery(theme.breakpoints.up('md'));
  const onSearch = () => {
    if (textFieldRef.current.value === '')
      dispatch({ type: WeatherActionCode.RETURN });
    else
      AccuWeatherAPI.getAutocompleteSearch(textFieldRef.current.value).then(
        (values) => {
          dispatch({
            type: WeatherActionCode.ADD_RESULTS,
            payload: { results: values },
          });
        }
      );
  };
  const onKeyPress = (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.code === 'Enter') onSearch();
  };

  return (
    <Box
      display="flex"
      width={mediumScreenBreakpoint ? '40%' : '60%'}
      margin="2em"
      justifyContent="space-around"
      alignItems="center"
    >
      <TextField
        fullWidth
        type="search"
        inputRef={textFieldRef}
        onKeyPress={onKeyPress}
      />
      <Button onClick={onSearch}>Search</Button>
    </Box>
  );
};

export default Search;
