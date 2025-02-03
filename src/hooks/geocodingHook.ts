import {useQuery, type UseQueryReturnType} from "@tanstack/vue-query";
import type {Ref} from "vue";
import {fetchGeocoding} from "@/core/api/geocodingApi.ts";
import type {GeocodeSearchFilter, GeocodeSearchResult} from "@/core/types/Geocoding.tsx";


export function useGeocoding(search: Ref<GeocodeSearchFilter>): UseQueryReturnType<GeocodeSearchResult, Error> {
    return useQuery({
        queryKey: ['geocode', {search: search}],
        queryFn: () => fetchGeocoding(search.value)
    })
}
