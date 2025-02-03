
export interface OpenWeatherForecastSearchResult {
    lat: number;
    lon: number;
    timezone: string;
    timezone_offset: number;
    current: CurrentWeather;
    daily: DailyWeather[];
}

export interface OpenWeatherForecastSearchFilter {
    lat: number;
    lng: number;
}

interface CurrentWeather {
    dt: number;
    sunrise: number;
    sunset: number;
    temp: number;
    feels_like: number;
    pressure: number;
    humidity: number;
    dew_point: number;
    uvi: number;
    clouds: number;
    visibility: number;
    wind_speed: number;
    wind_deg: number;
    wind_gust?: number;
    weather: WeatherCondition[];
}

interface DailyWeather {
    dt: number;
    sunrise: number;
    sunset: number;
    moonrise: number;
    moonset: number;
    moon_phase: number;
    summary: string;
    temp: Temperature;
    feels_like: FeelsLike;
    pressure: number;
    humidity: number;
    dew_point: number;
    wind_speed: number;
    wind_deg: number;
    wind_gust?: number;
    weather: WeatherCondition[];
    clouds: number;
    pop: number;
    rain?: number;
    snow?: number;
    uvi: number;
}

interface Temperature {
    day: number;
    min: number;
    max: number;
    night: number;
    eve: number;
    morn: number;
}

interface FeelsLike {
    day: number;
    night: number;
    eve: number;
    morn: number;
}

interface WeatherCondition {
    id: number;
    main: string;
    description: string;
    icon: string;
}