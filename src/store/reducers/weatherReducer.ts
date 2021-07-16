import AccuWeatherAPI, { AutocompleteResponse } from '../../api/AccuWeatherAPI';
import to from 'await-to-js';
import { AnyAction, Reducer } from 'redux';

interface WeatherState {
  celsius: boolean;
  favorites: string[];
  current: string;
  searchResults: AutocompleteResponse[];
}

export enum WeatherActionCode {
  TOGGLE = 'TOGGLE_CELSIUS_FAHRENHEIT',
  ADD_FAVORITE = 'ADD_WEATHER_KEY_TO_FAVORITES',
  REMOVE_FAVORITE = 'REMOVE_WEATHER_KEY_FROM_FAVORITES',
  CHANGE_CURRENT = 'CHANGE_CURRENT_WEATHER_KEY',
  ADD_RESULTS = 'ADD_AUTOCOMPLETE_WEATHER_RESULTS',
}

interface WeatherAction extends AnyAction {
  type: WeatherActionCode;
  payload?: {
    key?: string;
    results?: AutocompleteResponse[];
  };
}

const initialState: WeatherState = {
  celsius: true,
  favorites: [],
  current: '3383898',
  searchResults: [],
};

export async function getCurrentPosition(): Promise<string> {
  if (navigator && navigator.geolocation) {
    const position = await new Promise(
      (resolve: (g: GeolocationPosition) => void, reject) => {
        navigator.geolocation.getCurrentPosition(resolve, reject);
      }
    );
    const latLon = {
      longitude: position.coords.longitude,
      latitude: position.coords.latitude,
    };
    const [error, data] = await to(AccuWeatherAPI.geopositionSearch(latLon));
    console.log(data);
    if (error) return initialState.current;
    return data!.Key;
  }
  return initialState.current;
}

const weather: Reducer<WeatherState, WeatherAction> = (
  state: WeatherState = initialState,
  action: WeatherAction
) => {
  switch (action.type) {
    case WeatherActionCode.TOGGLE:
      return { ...state, celsius: !state.celsius };
    case WeatherActionCode.ADD_FAVORITE:
      return {
        ...state,
        favorites: [...state.favorites, action.payload!.key!],
      };
    case WeatherActionCode.REMOVE_FAVORITE:
      return {
        ...state,
        favorites: state.favorites.filter(
          (key) => key !== action.payload!.key!
        ),
      };
    case WeatherActionCode.CHANGE_CURRENT:
      return {
        ...state,
        current: action.payload!.key!,
      };
    case WeatherActionCode.ADD_RESULTS:
      return {
        ...state,
        searchResults: action.payload?.results!,
      };
    default:
      return state;
  }
};

export default weather;
