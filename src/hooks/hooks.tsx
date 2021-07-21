import { AppDispatch, RootState } from '../store/StoreProvider';
import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux';
import { Breakpoint } from '@material-ui/core/styles/createBreakpoints';
import { useMediaQuery, useTheme } from '@material-ui/core';

export const useAppDispatch = () => useDispatch<AppDispatch>();
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
export const useMediaQueryBreakpoint = (val: Breakpoint) => {
  const theme = useTheme();
  return useMediaQuery(theme.breakpoints.up(val));
};
