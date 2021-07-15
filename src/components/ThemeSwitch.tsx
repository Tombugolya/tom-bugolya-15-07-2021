import { ThemeActionCode } from '../store/reducers/themeReducer';
import { useAppDispatch, useAppSelector } from '../hooks/hooks';
import { Button } from '@material-ui/core';
import { MoonFill, SunFill } from 'react-bootstrap-icons';

const ThemeSwitch = () => {
  const dispatch = useAppDispatch();
  const darkThemeEnabled = useAppSelector((state) => state.theme.dark);

  return (
    <div>
      <Button onClick={() => dispatch({ type: ThemeActionCode.TOGGLE })}>
        {darkThemeEnabled ? <SunFill size={15} /> : <MoonFill size={15} />}
      </Button>
    </div>
  );
};

export default ThemeSwitch;
