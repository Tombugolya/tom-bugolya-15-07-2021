import to from 'await-to-js';

interface LatLon {
  latitude: number;
  longitude: number;
}

export enum Prefix {
  AUTOCOMPLETE = 'locations/v1/cities/autocomplete',
  CURRENT_CONDITIONS = 'currentconditions/v1',
  FIVE_DAY_FORECAST = 'forecasts/v1/daily/5day',
  GEOPOSITION = 'locations/v1/cities/geoposition/search',
  GET_INFO_BY_KEY = 'locations/v1/',
}

export interface LocationInfoResponse {
  Key: string;
  LocalizedName: string;
  Country: { ID: string; LocalizedName: string };
  AdministrativeArea: { ID: string; LocalizedName: string };
}

export interface CurrentConditionsResponse {
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
  };
  Day: {
    Icon: number;
  };
  Night: {
    Icon: number;
  };
}

export interface FiveDayForecastResponse {
  DailyForecasts: SingleForecast[];
}

interface GeopositionResponse {
  Key: string;
}

export type CombinedData = [
  CurrentConditionsResponse,
  LocationInfoResponse,
  FiveDayForecastResponse
];

class AccuWeatherApi {
  #url: string = 'https://dataservice.accuweather.com';
  #apiKey: string = `${process.env.REACT_APP_WEATHER_API_KEY}`;
  #assetsUrl: string =
    'https://herolo-assets.s3.us-east-2.amazonaws.com/images';
  #headers = {
    method: 'GET',
  };

  public async getAutocompleteSearch(
    query: string
  ): Promise<LocationInfoResponse[]> {
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
    return (await data?.json()) as Promise<LocationInfoResponse[]>;
  }

  public async getCurrentConditions(
    key: string
  ): Promise<CurrentConditionsResponse> {
    const queryParams = new URLSearchParams({
      apikey: this.#apiKey,
    }).toString();
    const response = fetch(
      `${this.#url}/${Prefix.CURRENT_CONDITIONS}/${key}?${queryParams}`,
      this.#headers
    );
    const [error, data] = await to(response);
    if (error) console.log(error);
    return (await data?.json())[0] as Promise<CurrentConditionsResponse>;
  }

  public async getFiveDayForecast(
    key: string
  ): Promise<FiveDayForecastResponse> {
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

  public async getGeopositionSearch({
    latitude,
    longitude,
  }: LatLon): Promise<GeopositionResponse> {
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
    return (await data?.json()) as Promise<GeopositionResponse>;
  }

  public async getLocationInfoByKey(key: string) {
    const queryParams = new URLSearchParams({
      apikey: this.#apiKey,
    }).toString();
    const response = fetch(
      `${this.#url}/${Prefix.GET_INFO_BY_KEY}/${key}?${queryParams}`
    );
    const [error, data] = await to(response);
    if (error) console.log(error);
    return (await data?.json()) as Promise<LocationInfoResponse>;
  }

  public getImageUrl(id: number) {
    return `${this.#assetsUrl}/${id}-s.png`;
  }
  public async getCombinedData(key: string): Promise<CombinedData> {
    return Promise.all([
      this.getCurrentConditions(key),
      this.getLocationInfoByKey(key),
      this.getFiveDayForecast(key),
    ]);
  }
  public getCombinedDataCallback(
    key: string,
    callback: (combinedData: CombinedData) => void
  ) {
    this.getCombinedData(key).then(callback);
  }
}

export default new AccuWeatherApi();
