import to from 'await-to-js';

interface FixedLengthArray<L extends number, T> extends ArrayLike<T> {
  length: L;
}

interface LatLon {
  latitude: number;
  longitude: number;
}

export enum Prefix {
  AUTOCOMPLETE = 'locations/v1/cities/autocomplete',
  CURRENT_CONDITIONS = 'currentconditions/v1',
  FIVE_DAY_FORECAST = 'forecasts/v1/daily/5day',
  GEOPOSITION = 'locations/v1/cities/geoposition/search',
}

interface AutocompleteResponse {
  Key: string;
  LocalizedName: string;
  Country: { ID: string; LocalizedName: string };
  AdministrativeArea: { ID: string; LocalizedName: string };
}

interface CurrentConditionsResponse {
  WeatherText: string;
  WeatherIcon: number;
  Temperature: {
    Metric: {
      Value: number;
    };
    Imperial: {
      Value: number;
    };
  };
}

interface SingleForecast {
  EpochDate: number;
  Temperature: {
    Minimum: {
      Value: number;
      Unit: 'F' | 'C';
    };
    Maximum: {
      Value: number;
      Unit: 'F' | 'C';
    };
    Day: {
      Icon: number;
    };
    Night: {
      Icon: number;
    };
  };
}

interface FiveDayForecastResponse {
  DailyForecasts: FixedLengthArray<5, SingleForecast>;
}

class AccuWeatherApi {
  #url: string = 'https://dataservice.accuweather.com';
  #apiKey: string = `${process.env.REACT_APP_WEATHER_API_KEY}`;
  #headers = {
    method: 'GET',
  };
  public async autocompleteSearch(
    query: string
  ): Promise<AutocompleteResponse[]> {
    const queryParams = new URLSearchParams({
      apikey: this.#apiKey,
      q: query,
    }).toString();
    const response = fetch(
      `${this.#url}/${Prefix.AUTOCOMPLETE}?${queryParams}`,
      this.#headers
    );
    const [error, data] = await to(response);
    if (error) console.log(error);
    return (await data?.json()) as Promise<AutocompleteResponse[]>;
  }

  public async currentConditions(
    key: string
  ): Promise<CurrentConditionsResponse[]> {
    const queryParams = new URLSearchParams({
      apikey: this.#apiKey,
    }).toString();
    const response = fetch(
      `${this.#url}/${Prefix.CURRENT_CONDITIONS}/${key}?${queryParams}`,
      this.#headers
    );
    const [error, data] = await to(response);
    if (error) console.log(error);
    return (await data?.json()) as Promise<CurrentConditionsResponse[]>;
  }

  public async fiveDayForecast(key: string): Promise<FiveDayForecastResponse> {
    const queryParams = new URLSearchParams({
      apikey: this.#apiKey,
    }).toString();
    const response = fetch(
      `${this.#url}/${Prefix.FIVE_DAY_FORECAST}/${key}?${queryParams}`,
      this.#headers
    );
    const [error, data] = await to(response);
    if (error) console.log(error);
    return (await data?.json()) as Promise<FiveDayForecastResponse>;
  }

  public async geopositionSearch({ latitude, longitude }: LatLon) {
    const queryParams = new URLSearchParams({
      apikey: this.#apiKey,
      q: `${latitude},${longitude}`,
    }).toString();
    const response = fetch(
      `${this.#url}/${Prefix.GEOPOSITION}?${queryParams}`,
      this.#headers
    );
    const [error, data] = await to(response);
    if (error) console.log(error);
    return (await data?.json()) as Promise<FiveDayForecastResponse>;
  }
}

export default new AccuWeatherApi();
