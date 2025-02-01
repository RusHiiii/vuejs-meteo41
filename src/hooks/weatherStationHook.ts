import {useQuery, type UseQueryReturnType} from "@tanstack/vue-query";
import {
  fetchLastWeatherStationObservation,
  fetchWeatherStation,
  fetchWeatherStations
} from "@/core/api/weatherStationApi.ts";
import type {WeatherStation, WeatherStationSearchResult} from "@/core/types/WeatherStation.tsx";
import type {Ref} from "vue";
import type {Observation} from "@/core/types/Observation.tsx";

export function useWeatherStation(reference: Ref<string>): UseQueryReturnType<WeatherStation, Error> {
  return useQuery({
    queryKey: ['weather_station', {reference: reference}],
    queryFn: () => fetchWeatherStation(reference.value)
  })
}

export function useWeatherStations(): UseQueryReturnType<WeatherStationSearchResult, Error> {
  return useQuery({
    queryKey: ['list_weather_station'],
    queryFn: () => fetchWeatherStations()
  })
}

export function useObservationWeatherStation(reference: Ref<string>): UseQueryReturnType<Observation, Error> {
  return useQuery({
    queryKey: ['weather_station_observation', {reference: reference}],
    queryFn: () => fetchLastWeatherStationObservation(reference.value),
    retry: false
  })
}
