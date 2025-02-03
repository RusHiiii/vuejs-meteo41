import apiClient from "@/core/api/apiClient.ts";
import queryString from 'qs';
import type {GeocodeSearchResult, GeocodeSearchFilter} from "@/core/types/Geocoding.tsx";


export async function fetchGeocoding(search: GeocodeSearchFilter): Promise<GeocodeSearchResult> {
  return await apiClient(`/api/geocoding?${queryString.stringify(search)}`, {
      method: 'GET'
    })
    .then((response: Response) => response.json());
}
