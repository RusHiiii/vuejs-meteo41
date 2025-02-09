import {useQuery, type UseQueryReturnType} from "@tanstack/vue-query";
import type {Ref} from "vue";
import {
  fetchDetailWeatherData,
  fetchHistoryWeatherData, fetchHistoryWeatherDataGraph,
  fetchSummaryWeatherData
} from "@/core/api/weatherDataApi.ts";
import type {
  DetailWeatherData,
  HistoryWeatherData, HistoryWeatherGraphSearchResult,
  SummaryWeatherData
} from "@/core/types/WeatherData.tsx";


export function useWeatherDataSummary(reference: Ref<string>): UseQueryReturnType<SummaryWeatherData, Error> {
  return useQuery({
    queryKey: ['weather_data_summary', {reference: reference}],
    queryFn: () => fetchSummaryWeatherData(reference.value)
  })
}

export function useWeatherDataHistory(reference: Ref<string>, period: Ref<string>): UseQueryReturnType<HistoryWeatherData, Error> {
  return useQuery({
    queryKey: ['weather_data_history', {reference: reference, period: period}],
    queryFn: () => fetchHistoryWeatherData(reference.value, period.value),
    retry: false
  })
}

export function useWeatherDataHistoryGraph(reference: Ref<string>, period: Ref<string>): UseQueryReturnType<HistoryWeatherGraphSearchResult, Error> {
  return useQuery({
    queryKey: ['weather_data_history_graph', {reference: reference, period: period}],
    queryFn: () => fetchHistoryWeatherDataGraph(reference.value, period.value),
    retry: false
  })
}

export function useDetailWeatherData(reference: Ref<string>): UseQueryReturnType<DetailWeatherData, Error> {
  return useQuery({
    queryKey: ['weather_data_detail', {reference: reference}],
    queryFn: () => fetchDetailWeatherData(reference.value),
    refetchInterval: 60000,
    retry: false
  })
}
