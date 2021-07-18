import { useAppDispatch, useAppSelector } from '../hooks/hooks';
import { Button, List, ListItem, ListItemText } from '@material-ui/core';
import { MoonFill, SunFill } from 'react-bootstrap-icons';
import { ThemeActionCode } from '../store/reducers/themeReducer';
import { WeatherActionCode } from '../store/reducers/weatherReducer';
import { FC } from 'react';

interface ThemeSwitchProps {
  listItems?: boolean;
}

const ThemeSwitch: FC<ThemeSwitchProps> = ({ listItems = false }) => {
  const dispatch = useAppDispatch();
  const darkThemeEnabled = useAppSelector((state) => state.theme.dark);
  const celsius = useAppSelector((state) => state.weather.celsius);

  return !listItems ? (
    <>
      <Button
        style={{ margin: '1em' }}
        onClick={() => dispatch({ type: ThemeActionCode.TOGGLE })}
      >
        {darkThemeEnabled ? <SunFill size={15} /> : <MoonFill size={15} />}
      </Button>
      <Button
        style={{ margin: '1em' }}
        onClick={() => dispatch({ type: WeatherActionCode.TOGGLE })}
      >
        {celsius ? 'F' : 'C'}
      </Button>
    </>
  ) : (
    <>
      <List>
        <ListItem
          button
          onClick={() => dispatch({ type: ThemeActionCode.TOGGLE })}
        >
          <ListItemText>
            {darkThemeEnabled ? <SunFill size={15} /> : <MoonFill size={15} />}
          </ListItemText>
        </ListItem>
      </List>
      <List>
        <ListItem
          button
          onClick={() => dispatch({ type: WeatherActionCode.TOGGLE })}
        >
          <ListItemText>{celsius ? 'F' : 'C'}</ListItemText>
        </ListItem>
      </List>
    </>
  );
};

export default ThemeSwitch;
