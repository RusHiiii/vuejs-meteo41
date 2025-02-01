<template>
  <BreadCrumb
    :url="ROUTES.CURRENT_WEATHER_DATA"
    text="Donnée courante"
    page="Données"
  />

  <div class="fullwidth-block no-padding-top">
    <div class="container">
      <div class="row">
        <div class="fullwidth-block padding-content">
          <div class="content col-md-8">
            <div class="post single">
              <h2 class="entry-title">
                Données de la station en temps réel
              </h2>
              <div class="featured-image">
                <img
                  src="/images/chenonceau.png"
                  alt="Chenonceau"
                />
              </div>

              <div class="entry-content min-height-entry">
                <div v-if="isWeatherDataErrored" class="primary-alert">
                  Impossible de charger les données de la stations...
                </div>

                <div v-if="weatherDataDetail">
                  <p>
                    {{weatherDataDetail.weatherStation.shortDescription}}
                  </p>

                  <CurrentWeatherDataTable
                    :observation="weatherStationObservation"
                    :weatherData="weatherDataDetail"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>

        <WeatherDataSummary />

        <div class="sidebar col-md-3 col-md-offset-1">
          <WeatherDataAccess />
        </div>
      </div>
    </div>
  </div>
</template>
<script setup lang="ts">
import {ROUTES} from "@/core/constant.ts";
import BreadCrumb from "@/components/common/BreadCrumb.vue";
import WeatherDataAccess from "@/components/common/weatherData/WeatherDataAccess.vue";
import WeatherDataSummary from "@/components/common/weatherData/WeatherDataSummary.vue";
import {useCurrentWeatherStationReference} from "@/stores/weatherStation.ts";
import CurrentWeatherDataTable from "@/components/weatherData/CurrentWeatherDataTable.vue";
import {useDetailWeatherData} from "@/hooks/weatherDataHook.ts";
import {useObservationWeatherStation} from "@/hooks/weatherStationHook.ts";

const weatherStationReference = useCurrentWeatherStationReference();

const {data: weatherDataDetail, isError: isWeatherDataErrored} = useDetailWeatherData(weatherStationReference);

const {data: weatherStationObservation} = useObservationWeatherStation(weatherStationReference);

</script>
