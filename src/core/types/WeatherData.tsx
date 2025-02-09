import type {Unit} from "@/core/types/Unit.tsx";
import type {WeatherStation} from "@/core/types/WeatherStation.tsx";

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

export interface HistoryWeatherData {
  avgAqi: number;
  avgPm25: number;
  lightningNumber: number;
  maxAqi: number;
  maxAqiReceivedAt: string;
  maxBeaufortScale: number;
  maxBeaufortScaleReceivedAt: string;
  maxDewPoint: number;
  maxDewPointReceivedAt: string;
  maxHeatIndex: number;
  maxHeatIndexReceivedAt: string;
  maxHumidex: number;
  maxHumidexReceivedAt: string;
  maxHumidity: number;
  maxHumidityReceivedAt: string;
  maxLeafWetness: number;
  maxLeafWetnessReceivedAt: string;
  maxLightningDistance: number;
  maxLightningDistanceReceivedAt: string;
  maxPm25: number;
  maxPm25ReceivedAt: string;
  maxRainEvent: number;
  maxRainEventReceivedAt: string;
  maxRainRate: number;
  maxRainRateReceivedAt: string;
  maxRelativePressure: number;
  maxRelativePressureReceivedAt: string;
  maxSoilTemperature: number;
  maxSoilTemperatureReceivedAt: string;
  maxSolarRadiation: number;
  maxSolarRadiationReceivedAt: string;
  maxTemperature: number;
  maxTemperatureReceivedAt: string;
  maxUv: number;
  maxUvReceivedAt: string;
  maxWindChill: number;
  maxWindChillReceivedAt: string;
  maxWindGust: number;
  maxWindGustReceivedAt: string;
  minAqi: number;
  minAqiReceivedAt: string;
  minDewPoint: number;
  minDewPointReceivedAt: string;
  minHeatIndex: number;
  minHeatIndexReceivedAt: string;
  minHumidex: number;
  minHumidexReceivedAt: string;
  minHumidity: number;
  minHumidityReceivedAt: string;
  minLightningDistance: number;
  minLightningDistanceReceivedAt: string;
  minPm25: number;
  minPm25ReceivedAt: string;
  minRelativePressure: number;
  minRelativePressureReceivedAt: string;
  minSoilTemperature: number;
  minSoilTemperatureReceivedAt: string;
  minTemperature: number;
  minTemperatureReceivedAt: string;
  minWindChill: number;
  minWindChillReceivedAt: string;
  rainPeriod: number;
  unit: Unit;
  weatherStation: WeatherStation;
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

export interface WeatherGraphData {
  id: number;
  aqi: number;
  aqiAvg: number;
  dewPoint: number;
  humidity: number;
  leafWetness?: number;
  pm25?: number;
  rainDaily: number;
  rainRate: number;
  receivedAt: string;
  relativePressure: number;
  soilTemperature?: number;
  solarRadiation: number;
  temperature: number;
  uv: number;
  windChill: number;
  windDirection: number;
  windGust: number;
  windSpeed: number;
}

export interface HistoryWeatherGraphSearchResult {
  datas: Array<WeatherGraphData>;
  dateBegin: string;
  dateEnd: string;
  numberOfResult: number;
  unit: Unit;
  weatherStation: WeatherStation;
}