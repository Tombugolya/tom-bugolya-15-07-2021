import AccuWeatherAPI, {
  LocationInfoResponse,
  CurrentConditionsResponse,
  FiveDayForecastResponse,
} from '../../api/AccuWeatherAPI';
import { AnyAction, Reducer } from 'redux';
import to from 'await-to-js';

interface WeatherState {
  celsius: boolean;
  favorites: string[];
  current: {
    conditions: CurrentConditionsResponse;
    info: LocationInfoResponse;
    fiveDayForecast: FiveDayForecastResponse;
  };
  searchResults: LocationInfoResponse[];
}

export enum WeatherActionCode {
  TOGGLE = 'TOGGLE_CELSIUS_FAHRENHEIT',
  ADD_FAVORITE = 'ADD_WEATHER_KEY_TO_FAVORITES',
  REMOVE_FAVORITE = 'REMOVE_WEATHER_KEY_FROM_FAVORITES',
  CHANGE_CURRENT = 'CHANGE_CURRENT_WEATHER_KEY',
  ADD_RESULTS = 'ADD_AUTOCOMPLETE_WEATHER_RESULTS',
  RETURN = 'RETURN_TO_MAIN_DISPLAY',
}

interface CombinedInformation {
  conditions: CurrentConditionsResponse;
  info: LocationInfoResponse;
  fiveDayForecast: FiveDayForecastResponse;
}

interface WeatherAction extends AnyAction {
  type: WeatherActionCode;
  payload?: {
    key?: string;
    results?: LocationInfoResponse[];
    current?: CombinedInformation;
  };
}

const initialState: WeatherState = {
  celsius: true,
  favorites: [],
  current: null,
  searchResults: [],
};

const defaultKey = '215854';

export async function getCurrentPositionKey(): Promise<string> {
  if (navigator && navigator.geolocation) {
    try {
      const position = await new Promise(
        (resolve: (g: GeolocationPosition) => void, reject) => {
          navigator.geolocation.getCurrentPosition(resolve, reject);
        }
      );
      const latLon = {
        longitude: position.coords.longitude,
        latitude: position.coords.latitude,
      };
      const [error, data] = await to(
        AccuWeatherAPI.getGeopositionSearch(latLon)
      );
      if (error) return defaultKey;
      return data!.Key;
    } catch (e) {
      return defaultKey;
    }
  }
  return defaultKey;
}

export const toggleTemperatureUnit = (): WeatherAction => {
  return {
    type: WeatherActionCode.TOGGLE,
  };
};

export const addFavorite = (key: string): WeatherAction => {
  return {
    type: WeatherActionCode.ADD_FAVORITE,
    payload: { key },
  };
};

export const removeFavorite = (key: string): WeatherAction => {
  return {
    type: WeatherActionCode.REMOVE_FAVORITE,
    payload: { key },
  };
};

export const changeCurrent = (current: CombinedInformation): WeatherAction => {
  return {
    type: WeatherActionCode.CHANGE_CURRENT,
    payload: { current },
  };
};

export const addResults = (results: LocationInfoResponse[]): WeatherAction => {
  return {
    type: WeatherActionCode.ADD_RESULTS,
    payload: { results },
  };
};

export const returnToMainDisplay = (): WeatherAction => {
  return {
    type: WeatherActionCode.RETURN,
  };
};

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
        favorites: [...state.favorites, action.payload.key],
      };
    case WeatherActionCode.REMOVE_FAVORITE:
      return {
        ...state,
        favorites: state.favorites.filter((key) => key !== action.payload.key),
      };
    case WeatherActionCode.CHANGE_CURRENT:
      return {
        ...state,
        current: action.payload.current,
      };
    case WeatherActionCode.ADD_RESULTS:
      return {
        ...state,
        searchResults: action.payload.results,
      };
    case WeatherActionCode.RETURN:
      return {
        ...state,
        searchResults: [],
      };
    default:
      return state;
  }
};

export default weather;
