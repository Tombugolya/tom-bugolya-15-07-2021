import to from 'await-to-js';

interface LatLon {
  latitude: number;
  longitude: number;
}

export enum EndPoint {
  AUTOCOMPLETE = 'locations/v1/cities/autocomplete/',
  CURRENT_CONDITIONS = 'currentconditions/v1/',
  FIVE_DAY_FORECAST = 'forecasts/v1/daily/5day/',
  GEOPOSITION = 'locations/v1/cities/geoposition/search/',
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

interface RequestParameters {
  endPoint: EndPoint;
  query?: Partial<{ q: string }>;
  key?: string;
}

class AccuWeatherApi {
  readonly #url: string = 'https://dataservice.accuweather.com/';
  readonly #apiKey: string = `${process.env.REACT_APP_WEATHER_API_KEY}`;
  readonly #assetsUrl: string =
    'https://herolo-assets.s3.us-east-2.amazonaws.com/images/';
  readonly #headers = {
    method: 'GET',
  };
  #latestError: string;

  public async request<T>({
    endPoint,
    query = {},
    key = '',
  }: RequestParameters): Promise<T> {
    const queryParams = new URLSearchParams({
      apikey: this.#apiKey,
      ...query,
    }).toString();
    const response = fetch(
      `${this.#url}${endPoint}${key}?${queryParams}`,
      this.#headers
    );
    const [error, data] = await to(response);
    console.log(endPoint);
    console.log('Error: ', error);
    console.log('Data: ', data);
    if (error || !data.ok) {
      this.#latestError = `Failed due to: ${error || data.statusText}`;
      throw new Error(`Failed due to: ${error || data.statusText}`);
    }
    if (endPoint === EndPoint.CURRENT_CONDITIONS)
      return (await data.json())[0] as Promise<T>;
    return (await data.json()) as Promise<T>;
  }

  public async getAutocompleteSearch(
    q: string
  ): Promise<LocationInfoResponse[]> {
    return await this.request<LocationInfoResponse[]>({
      endPoint: EndPoint.AUTOCOMPLETE,
      query: { q },
    });
  }

  public async getCurrentConditions(
    key: string
  ): Promise<CurrentConditionsResponse> {
    return await this.request<CurrentConditionsResponse>({
      endPoint: EndPoint.CURRENT_CONDITIONS,
      key,
    });
  }

  public async getFiveDayForecast(
    key: string
  ): Promise<FiveDayForecastResponse> {
    return await this.request<FiveDayForecastResponse>({
      endPoint: EndPoint.FIVE_DAY_FORECAST,
      key,
    });
  }

  public async getGeopositionSearch({
    latitude,
    longitude,
  }: LatLon): Promise<GeopositionResponse> {
    return await this.request<GeopositionResponse>({
      endPoint: EndPoint.GEOPOSITION,
      query: {
        q: `${latitude},${longitude}`,
      },
    });
  }

  public async getLocationInfoByKey(
    key: string
  ): Promise<LocationInfoResponse> {
    return await this.request<LocationInfoResponse>({
      endPoint: EndPoint.GET_INFO_BY_KEY,
      key,
    });
  }

  public getImageUrl(id: number): string {
    return `${this.#assetsUrl}${id}-s.png`;
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
    callback: (combinedData: CombinedData) => void,
    onError: (e: any) => void = console.log
  ): void {
    this.getCombinedData(key)
      .then(callback)
      .catch((e) => {
        console.log('Error return on catch: ', e);
        onError(e);
      });
  }

  public getLatestErrorMessage(): string {
    return this.#latestError;
  }
}

export default new AccuWeatherApi();
