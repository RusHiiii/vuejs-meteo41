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
                  src="/static/images/chenonceau.png"
                  alt="Chenonceau"
                />
              </div>

              <div class="entry-content min-height-entry">
                <div v-if="isWeatherDataErrored" class="primary-alert">
                  Impossible de charger les données de la stations...
                </div>

                <div v-if="isWeatherDataFetched">
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
import {ROUTES} from "@/common/constant.ts";
import BreadCrumb from "@/components/common/BreadCrumb.vue";
import WeatherDataAccess from "@/components/common/weatherData/WeatherDataAccess.vue";
import WeatherDataSummary from "@/components/common/weatherData/WeatherDataSummary.vue";
import {
  fetchLastWeatherStationObservation
} from "@/common/api/weatherStationApi.ts";
import {useQuery} from "@tanstack/vue-query";
import {fetchDetailWeatherData} from "@/common/api/weatherDataApi.ts";
import {useWeatherStationReference} from "@/stores/weatherStation.ts";
import CurrentWeatherDataTable from "@/components/weatherData/CurrentWeatherDataTable.vue";

const weatherStationReference = useWeatherStationReference();

const {data: weatherDataDetail, isError: isWeatherDataErrored, isFetched: isWeatherDataFetched} = useQuery({
  queryKey: ['weather_data_detail', {reference: weatherStationReference}],
  queryFn: () => fetchDetailWeatherData(weatherStationReference.value),
  refetchInterval: 60000,
  retry: false
});

const {data: weatherStationObservation} = useQuery({
  queryKey: ['weather_data_observation', {reference: weatherStationReference}],
  queryFn: () => fetchLastWeatherStationObservation(weatherStationReference.value),
  retry: false,
  initialData: null
});

</script>
