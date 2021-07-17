import AccuWeatherAPI from '../api/AccuWeatherAPI';
import { FC, useRef } from 'react';
import { Box, Button, TextField } from '@material-ui/core';
import { useAppDispatch } from '../hooks/hooks';
import { WeatherActionCode } from '../store/reducers/weatherReducer';

const Search: FC = () => {
  const textFieldRef = useRef<HTMLInputElement>();
  const dispatch = useAppDispatch();
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

  return (
    <Box
      display="flex"
      width="40%"
      height="5vh"
      margin="2em"
      justifyContent="space-around"
      alignItems="center"
    >
      <TextField fullWidth type="search" inputRef={textFieldRef} />
      <Button onClick={onSearch}>Search</Button>
    </Box>
  );
};

export default Search;
