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
      dispatch({
        type: WeatherActionCode.ADD_RESULTS,
        payload: { results: [] },
      });
    else
      AccuWeatherAPI.autocompleteSearch(textFieldRef.current.value).then(
        (values) => {
          dispatch({
            type: WeatherActionCode.ADD_RESULTS,
            payload: { results: values },
          });
        }
      );
  };

  return (
    <>
      <Box display="flex" width="60vh" justifyContent="space-around">
        <TextField
          fullWidth
          type="search"
          label="Search"
          inputRef={textFieldRef}
        />
        <Button onClick={onSearch}>Search</Button>
      </Box>
    </>
  );
};

export default Search;
