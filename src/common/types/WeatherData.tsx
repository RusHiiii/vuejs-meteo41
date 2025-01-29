import type {Unit} from "@/common/types/Unit.tsx";
import type {WeatherStation} from "@/common/types/WeatherStation.tsx";

export interface SummaryWeatherData {
    humidity: number;
    id: number;
    receivedAt: string;
    relativePressure: number;
    temperature: number;
    unit: Unit;
    weatherStation: WeatherStation;
    windDirectionAvg: number;
    windSpeedAvg: number;
}

export interface DetailWeatherData {
  absolutePressure: number;
  aqi: number;
  aqiAvg: number;
  beaufortScale: number;
  cloudBase: number;
  dewPoint: number;
  heatIndex: number;
  humidex: number;
  humidexVariation: number;
  humidity: number;
  id: number;
  leafWetness: number;
  lightningDaily: number;
  pm25: number;
  pm25Avg: number;
  rainDaily: number;
  rainEvent: number;
  rainHourly: number;
  rainMonthly: number;
  rainRate: number;
  rainWeekly: number;
  rainYearly: number;
  receivedAt: string;
  relativePressure: number;
  relativePressureVariation: number;
  soilTemperature: number;
  soilTemperatureVariation: number;
  solarRadiation: number;
  solarRadiationVariation: number;
  temperature: number;
  temperatureVariation: number;
  uv: number;
  windChill: number;
  windDirection: number;
  windDirectionAvg: number;
  windGust: number;
  windMaxDailyGust: number;
  windSpeed: number;
  windSpeedAvg: number;
  unit: Unit;
  weatherStation: WeatherStation;
}
