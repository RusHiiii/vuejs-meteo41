import apiClient from "@/common/api/apiClient.ts";
import type {DetailWeatherData, SummaryWeatherData} from "@/common/types/WeatherData.tsx";

export async function fetchSummaryWeatherData(reference: string): Promise<SummaryWeatherData> {
  return await apiClient(`/api/weatherData/${reference}/currentData/summary`, {
      method: 'GET'
    })
    .then((response: Response) => response.json());
}

export async function fetchDetailWeatherData(reference: string): Promise<DetailWeatherData> {
  return await apiClient(`/api/weatherData/${reference}/currentData/detail`, {
    method: 'GET'
  })
    .then((response: Response) => response.json());
}
