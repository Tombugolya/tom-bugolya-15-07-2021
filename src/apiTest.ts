import {
  CurrentConditionsResponse,
  FiveDayForecastResponse,
  LocationInfoResponse,
} from './api/AccuWeatherAPI';

const TestObject: {
  conditions: CurrentConditionsResponse;
  info: LocationInfoResponse;
  fiveDayForecast: FiveDayForecastResponse;
} = {
  conditions: {
    WeatherText: 'Mostly cloudy',
    WeatherIcon: 6,
    Temperature: {
      Metric: {
        Value: 22.2,
      },
      Imperial: {
        Value: 72,
      },
    },
  },
  info: {
    Key: '221329',
    LocalizedName: 'Georgia',
    Country: {
      ID: 'JM',
      LocalizedName: 'Jamaica',
    },
    AdministrativeArea: {
      ID: '07',
      LocalizedName: 'Trelawny',
    },
  },
  fiveDayForecast: {
    DailyForecasts: [
      {
        EpochDate: 1626346800,
        Temperature: {
          Minimum: {
            Value: 56,
            Unit: 'F',
          },
          Maximum: {
            Value: 77,
            Unit: 'F',
          },
        },
        Day: {
          Icon: 18,
        },
        Night: {
          Icon: 35,
        },
      },
      {
        EpochDate: 1626433200,
        Temperature: {
          Minimum: {
            Value: 60,
            Unit: 'F',
          },
          Maximum: {
            Value: 74,
            Unit: 'F',
          },
        },
        Day: {
          Icon: 4,
        },
        Night: {
          Icon: 40,
        },
      },
      {
        EpochDate: 1626519600,
        Temperature: {
          Minimum: {
            Value: 59,
            Unit: 'F',
          },
          Maximum: {
            Value: 75,
            Unit: 'F',
          },
        },
        Day: {
          Icon: 12,
        },
        Night: {
          Icon: 7,
        },
      },
      {
        EpochDate: 1626606000,
        Temperature: {
          Minimum: {
            Value: 60,
            Unit: 'F',
          },
          Maximum: {
            Value: 79,
            Unit: 'F',
          },
        },
        Day: {
          Icon: 12,
        },
        Night: {
          Icon: 34,
        },
      },
      {
        EpochDate: 1626692400,
        Temperature: {
          Minimum: {
            Value: 62,
            Unit: 'F',
          },
          Maximum: {
            Value: 79,
            Unit: 'F',
          },
        },
        Day: {
          Icon: 1,
        },
        Night: {
          Icon: 34,
        },
      },
    ],
  },
};

export default TestObject;
