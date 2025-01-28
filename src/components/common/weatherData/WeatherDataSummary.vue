<template>
  <div class="sidebar col-md-3 col-md-offset-1">
    <div class="widget current-weather-data">
      <h3 class="widget-title">Données actuelle</h3>
      <ul>
        <li>
          <h3 class="entry-title">Température</h3>
          <div class="current">
            <span>
              <i class="wi wi-thermometer-exterior" />
            </span>
            <strong>{{temperature}}</strong>
            {{weatherDataSummary?.unit?.temperatureUnit}}
          </div>
        </li>
      </ul>
    </div>
  </div>
</template>

<script setup lang="ts">
import {useQuery} from "@tanstack/vue-query";
import {fetchSummaryWeatherData} from "@/common/api/weatherDataApi.ts";
import {useWeatherStation} from "@/stores/weatherStation.ts";
import {computed, reactive, watch} from "vue";
import {showFixedValue} from "@/utils/weatherData/showFixedValue.ts";

const {state} = useWeatherStation();


const {data: weatherDataSummary} = useQuery({
  queryKey: ['weather_data_summary', {reference: state}],
  queryFn: () => fetchSummaryWeatherData(state.weatherStationReference),
  refetchInterval: 60000
});

const temperature = computed(() => showFixedValue(weatherDataSummary.value?.temperature));

</script>
