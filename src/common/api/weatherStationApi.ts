import apiClient from "@/common/api/apiClient.ts";
import type {SummaryWeatherData} from "@/common/types/WeatherData.tsx";
import type {WeatherStation, WeatherStationSearchResult} from "@/common/types/WeatherStation.tsx";
import type {Observation} from "@/common/types/Observation.tsx";

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
