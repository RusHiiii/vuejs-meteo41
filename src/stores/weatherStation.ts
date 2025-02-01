import {ref} from 'vue'
import {defineStore, storeToRefs} from 'pinia'
import {DEFAULT_WEATHER_STATION} from "@/core/constant.ts";
import type { Ref } from 'vue'

export const useWeatherStationStore = defineStore('weatherStation', () => {
  const weatherStationReference = ref<string>(
    DEFAULT_WEATHER_STATION.REFERENCE
  );

  function switchWeatherStationReference(reference: string) {
    weatherStationReference.value = reference;
  }

  return { weatherStationReference, switchWeatherStationReference }
})

export const useWeatherStationReference = () : Ref<string> => {
  const store = useWeatherStationStore();
  const { weatherStationReference } = storeToRefs(store); // Ensures reactivity

  return weatherStationReference;
}
