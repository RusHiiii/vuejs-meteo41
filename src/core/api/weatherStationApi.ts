import apiClient from "@/core/api/apiClient.ts";
import type {WeatherStation, WeatherStationSearchResult} from "@/core/types/WeatherStation.tsx";
import type {Observation} from "@/core/types/Observation.tsx";

export async function fetchWeatherStations(): Promise<WeatherStationSearchResult> {
  return await apiClient(`/api/weatherStation`, {
      method: 'GET'
    })
    .then((response: Response) => response.json());
}

export async function fetchWeatherStation(reference: string): Promise<WeatherStation> {
  return await apiClient(`/api/weatherStation/${reference}`, {
    method: 'GET'
  })
    .then((response: Response) => response.json());
}

export async function fetchLastWeatherStationObservation(reference: string): Promise<Observation> {
  return await apiClient(`/api/weatherStation/observation/last/${reference}`, {
    method: 'GET'
  })
    .then((response: Response) => response.json());
}
