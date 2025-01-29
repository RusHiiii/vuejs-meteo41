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
        <li>
          <h3 class="entry-title">Pression atmosphérique</h3>
          <div class="current">
              <span>
                <i class="fa fa-tachometer" />
              </span>
            <strong>
              {{relativePressure}}
            </strong>
            {{weatherDataSummary?.unit?.pressureUnit}}
          </div>
        </li>
        <li>
          <h3 class="entry-title">Vent moyen</h3>
          <div class="current">
              <span>
                <i
                  :class="['wi', 'wi-wind', `towards-${windDirectionAvg}-deg`]"
                  :title="windDirectionAvgDeg"
                />
              </span>
            <strong>{{windSpeedAvg}}</strong>
            {{weatherDataSummary?.unit?.speedUnit}}
          </div>
        </li>
        <li>
          <h3 class="entry-title">Humidité</h3>
          <div class="current">
              <span>
                <i class="wi wi-humidity" />
              </span>
            <strong>{{humidity}}</strong>
            {{weatherDataSummary?.unit?.humidityUnit}}
          </div>
        </li>
        <li class="text-align-right">
          Mise à jour à <Date :date="weatherDataSummary?.receivedAt" format="LT" />
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
import Date from "@/components/common/Date.vue";
import {degToCompass} from "@/utils/weatherData/degToCompass.ts";

const {state} = useWeatherStation();

const weatherStationReference = computed(() => state.weatherStationReference);

const {data: weatherDataSummary} = useQuery({
  queryKey: ['weather_data_summary', {reference: weatherStationReference}],
  queryFn: () => fetchSummaryWeatherData(weatherStationReference.value),
  refetchInterval: 60000
});

const temperature = computed(() => showFixedValue(weatherDataSummary.value?.temperature));
const relativePressure = computed(() => showFixedValue(weatherDataSummary.value?.relativePressure));
const humidity = computed(() => showFixedValue(weatherDataSummary.value?.humidity));
const windSpeedAvg = computed(() => showFixedValue(weatherDataSummary.value?.windSpeedAvg));
const windDirectionAvg = computed(() => showFixedValue(weatherDataSummary.value?.windDirectionAvg, 0));
const windDirectionAvgDeg = computed(() => degToCompass(weatherDataSummary.value?.windDirectionAvg));

</script>
