import apiClient from "@/common/api/apiClient.ts";
import type {SummaryWeatherStation} from "@/common/types/WeatherData.tsx";

export async function fetchSummaryWeatherData(reference: string): Promise<SummaryWeatherStation> {
  return await apiClient(`/api/weatherData/${reference}/currentData/summary`, {
      method: 'GET'
    })
    .then((response: Response) => response.json());
}
