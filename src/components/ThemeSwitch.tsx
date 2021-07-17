import { useAppDispatch, useAppSelector } from '../hooks/hooks';
import { Button } from '@material-ui/core';
import { MoonFill, SunFill } from 'react-bootstrap-icons';
import { ThemeActionCode } from '../store/reducers/themeReducer';
import { WeatherActionCode } from '../store/reducers/weatherReducer';

const ThemeSwitch = () => {
  const dispatch = useAppDispatch();
  const darkThemeEnabled = useAppSelector((state) => state.theme.dark);
  const celsius = useAppSelector((state) => state.weather.celsius);

  return (
    <div>
      <Button onClick={() => dispatch({ type: ThemeActionCode.TOGGLE })}>
        {darkThemeEnabled ? <SunFill size={15} /> : <MoonFill size={15} />}
      </Button>
      <Button onClick={() => dispatch({ type: WeatherActionCode.TOGGLE })}>
        {celsius ? 'F' : 'C'}
      </Button>
    </div>
  );
};

export default ThemeSwitch;
