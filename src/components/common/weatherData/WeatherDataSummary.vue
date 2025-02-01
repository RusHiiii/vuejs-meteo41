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
          Mise à jour à <DateHelper :date="weatherDataSummary?.receivedAt" format="LT" />
        </li>
      </ul>
    </div>
  </div>
</template>

<script setup lang="ts">
import {useCurrentWeatherStationReference} from "@/stores/weatherStation.ts";
import {computed} from "vue";
import {showFixedValue} from "@/core/utils/weatherData/showFixedValue.ts";
import {degToCompass} from "@/core/utils/weatherData/degToCompass.ts";
import DateHelper from "@/components/common/DateHelper.vue";
import {useWeatherDataSummary} from "@/hooks/weatherDataHook.ts";

const weatherStationReference = useCurrentWeatherStationReference();

const {data: weatherDataSummary} = useWeatherDataSummary(weatherStationReference);

const temperature = computed(() => showFixedValue(weatherDataSummary.value?.temperature));
const relativePressure = computed(() => showFixedValue(weatherDataSummary.value?.relativePressure));
const humidity = computed(() => showFixedValue(weatherDataSummary.value?.humidity));
const windSpeedAvg = computed(() => showFixedValue(weatherDataSummary.value?.windSpeedAvg));
const windDirectionAvg = computed(() => showFixedValue(weatherDataSummary.value?.windDirectionAvg, 0));
const windDirectionAvgDeg = computed(() => degToCompass(weatherDataSummary.value?.windDirectionAvg));

</script>
