import {ref, computed, reactive} from 'vue'
import { defineStore } from 'pinia'
import {DEFAULT_WEATHER_STATION} from "@/common/constant.ts";

export const useWeatherStation = defineStore('weatherStation', () => {
  const state = reactive({
    weatherStationReference: DEFAULT_WEATHER_STATION.REFERENCE
  });

  function switchWeatherStationReference(reference: string) {
    state.weatherStationReference = reference;
  }

  return { state, switchWeatherStationReference }
})
