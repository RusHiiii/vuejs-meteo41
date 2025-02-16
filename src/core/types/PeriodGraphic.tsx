import type {WeatherStation} from "@/core/types/WeatherStation.tsx";
import type {User} from "@/core/types/User.tsx";

export enum ChartType {
  Temperature = 'temperature',
  SoilTemperature  = 'soilTemperature',
  Humidity = 'humidity',
  LeafWetness = 'leafWetness',
  UV = 'UV',
  Pressure = 'Pressure',
  SolarRadiation = 'solarRadiation'
}