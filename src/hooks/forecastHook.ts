import {useQuery, type UseQueryReturnType} from "@tanstack/vue-query";
import {computed, type Ref} from "vue";
import type {
    OpenWeatherForecastSearchFilter,
    OpenWeatherForecastSearchResult
} from "@/core/types/OpenWeatherForecast.tsx";
import {fetchForecast} from "@/core/api/openWeatherForecatsApi.ts";


export function useForecast(search: Ref<OpenWeatherForecastSearchFilter|null>): UseQueryReturnType<OpenWeatherForecastSearchResult, Error> {
    return useQuery({
        queryKey: ['forecast', {search: search}],
        queryFn: () => fetchForecast(search.value),
        enabled: computed(() => !!search.value)
    })
}
