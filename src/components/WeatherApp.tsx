import { Button } from '@material-ui/core';
import { useAppDispatch } from '../hooks/hooks';
import { ThemeActionCode } from '../store/reducers/themeReducer';

const WeatherApp = () => {
  const dispatch = useAppDispatch();

  return (
    <Button
      color="primary"
      variant="contained"
      onClick={() => {
        dispatch({ type: ThemeActionCode.TOGGLE });
      }}
    >
      Toggle
    </Button>
  );
};

export default WeatherApp;
