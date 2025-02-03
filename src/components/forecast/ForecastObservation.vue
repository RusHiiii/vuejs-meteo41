<template>
  <div class="forecast-container">
    <div class="today forecast">
      <div class="forecast-header">
        <div class="day cap">
          <DateHelper format="dddd" :date="new Date()" />
        </div>
        <div class="date">
          <DateHelper format="D MMM" :date="new Date()" />
        </div>
      </div>
      <div class="forecast-content">
        <div class="location">{{props.location}}</div>
        <div class="degree">
          <div class="num">
            {{showFixedValue(forecast?.current.temp)}}
            <sup>o</sup>C
          </div>
          <div class="forecast-icon">
            <img
                :src="`/images/icons/${iconIdToSvg(forecast?.current.weather[0].icon)}`"
                :title="forecast?.current.weather[0].description"
                alt="forecast"
                width="48"
            />
          </div>
        </div>
        <span>
            <img src="/images/icon-umberella.png" alt="humidity" />
            {{showFixedValue(forecast?.current.humidity)}}%
          </span>
        <span>
            <img src="/images/icon-wind.png" alt="speed" />
            {{showSpeedValue(forecast?.current.wind_speed)}}km/h
          </span>
        <span>
            <img src="/images/icon-compass.png" alt="wind" />
            {{degToCompass(forecast?.current.wind_deg)}}
          </span>
      </div>
    </div>


    <div v-for="value in [...Array(7).keys()].slice(1, 6)" :key="value" class="forecast">
      <div class="forecast-header">
        <div class="day day-name cap">
          <DateHelper :format="'dddd'" :date="moment().add(value, 'days').toDate()" />
        </div>
      </div>
      <div class="forecast-content city">
        <div class="forecast-icon">
          <img
              :src="`/images/icons/${iconIdToSvg(forecast?.daily[value]?.weather[0]?.icon || 'default-icon')}`"
              :title="forecast?.daily[value]?.weather[0]?.description || 'No description'"
              alt="forecast"
              width="48"
          />
        </div>
        <div class="degree">
          {{ showRoundValue(forecast?.daily[value]?.temp?.max || 0) }}
          <sup>o</sup>C
        </div>
        <small>
          {{ showRoundValue(forecast?.daily[value]?.temp?.min || 0) }}
          <sup>o</sup>C
        </small>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import moment from 'moment';
import type {OpenWeatherForecastSearchResult} from "@/core/types/OpenWeatherForecast.tsx";
import DateHelper from "@/components/common/DateHelper.vue";
import {showFixedValue} from "@/core/utils/weatherData/showFixedValue.ts";
import {iconIdToSvg} from "@/core/utils/forecast/iconIdToSvg.ts";
import {degToCompass} from "@/core/utils/weatherData/degToCompass.ts";
import {showSpeedValue} from "@/core/utils/forecast/showSpeedValue.ts";
import {showRoundValue} from "@/core/utils/forecast/showRoundValue.ts";

const props = defineProps<{
  forecast: OpenWeatherForecastSearchResult | undefined,
  location: string|undefined
}>();
</script>
