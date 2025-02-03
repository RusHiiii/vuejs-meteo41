import apiClient from "@/core/api/apiClient.ts";
import queryString from 'qs';
import type {OpenWeatherForecastSearchResult, OpenWeatherForecastSearchFilter} from "@/core/types/OpenWeatherForecast.tsx";


export async function fetchForecast(search: OpenWeatherForecastSearchFilter): Promise<OpenWeatherForecastSearchResult> {
  return await apiClient(`/api/openWeather?${queryString.stringify(search)}`, {
      method: 'GET'
    })
    .then((response: Response) => response.json());
}
