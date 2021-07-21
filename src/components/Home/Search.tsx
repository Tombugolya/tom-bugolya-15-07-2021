import AccuWeatherAPI from '../../api/AccuWeatherAPI';
import {
  addResults,
  returnToMainDisplay,
} from '../../store/reducers/weatherReducer';
import { FC, KeyboardEvent, useRef } from 'react';
import { Box, Button, TextField } from '@material-ui/core';
import { useAppDispatch, useMediaQueryBreakpoint } from '../../hooks/hooks';

const Search: FC = () => {
  const textFieldRef = useRef<HTMLInputElement>();
  const dispatch = useAppDispatch();
  const mediumScreenBreakpoint = useMediaQueryBreakpoint('md');

  const onSearch = () => {
    if (textFieldRef.current.value === '') dispatch(returnToMainDisplay());
    else
      AccuWeatherAPI.getAutocompleteSearch(textFieldRef.current.value).then(
        (values) => dispatch(addResults(values))
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
