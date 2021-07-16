import { AnyAction, Reducer } from 'redux';

interface WeatherState {
  celsius: boolean;
  favorites: string[];
}

export enum WeatherActionCode {
  TOGGLE = 'TOGGLE_CELSIUS_FAHRENHEIT',
  ADD_FAVORITE = 'ADD_KEY_TO_FAVORITES',
  REMOVE_FAVORITE = 'REMOVE_KEY_FROM_FAVORITES',
}

interface WeatherAction extends AnyAction {
  type: WeatherActionCode;
  payload?: {
    key: string;
  };
}

const initialState: WeatherState = {
  celsius: true,
  favorites: [],
};

const weather: Reducer<WeatherState, WeatherAction> = (
  state: WeatherState = initialState,
  action: WeatherAction
) => {
  switch (action.type) {
    case WeatherActionCode.TOGGLE:
      return { ...state, celsius: !state.celsius };
    case WeatherActionCode.ADD_FAVORITE:
      return { ...state, favorites: [...state.favorites, action.payload!.key] };
    case WeatherActionCode.REMOVE_FAVORITE:
      return {
        ...state,
        favorites: state.favorites.filter((key) => key !== action.payload!.key),
      };
    default:
      return state;
  }
};

export default weather;
