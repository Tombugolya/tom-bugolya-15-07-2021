import { AnyAction, Reducer } from 'redux';

interface ThemeState {
  dark: boolean;
}

export enum ThemeActionCode {
  TOGGLE = 'TOGGLE_DARK_THEME',
}

interface ThemeAction extends AnyAction {
  type: ThemeActionCode;
}

const initialState: ThemeState = {
  dark: false,
};

const theme: Reducer<ThemeState, ThemeAction> = (
  state: ThemeState = initialState,
  action: ThemeAction
) => {
  switch (action.type) {
    case ThemeActionCode.TOGGLE:
      return { ...state, dark: !state.dark };
    default:
      return state;
  }
};

export default theme;
