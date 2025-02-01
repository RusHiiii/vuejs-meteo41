<template>
  <BreadCrumb
    :url="ROUTES.CURRENT_WEATHER_DATA"
    :text="periodName"
    page="Données"
  />

  <div class="fullwidth-block no-padding-top">
    <div class="container">
      <div class="row">
        <div class="fullwidth-block padding-content">
          <div class="content col-md-8">
            <div class="post single">
              <h2 class="entry-title">
                {{periodName}}
              </h2>
              <div class="featured-image">
                <img
                  src="/static/images/chenonceau.png"
                  alt="Chenonceau"
                />
              </div>

              <div class="entry-content min-height-entry">
                <div v-if="isWeatherDataHistoryErrored" class="primary-alert">
                  Impossible de charger les données de la stations...
                </div>

                <p v-else-if="isWeatherDataHistoryLoading" class="loading">
                  Veuillez patienter
                </p>

                <div v-else-if="isWeatherDataHistoryFetched">
                  <p>
                    {{weatherDataHistory.weatherStation.shortDescription}}
                  </p>

                  <HistoryWeatherDataTable
                    :weatherData="weatherDataHistory"
                    :periodName="periodName"
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
import BreadCrumb from "@/components/common/BreadCrumb.vue";
import {AVAILABLE_PERIOD, ROUTES} from "@/core/constant.ts";
import WeatherDataAccess from "@/components/common/weatherData/WeatherDataAccess.vue";
import WeatherDataSummary from "@/components/common/weatherData/WeatherDataSummary.vue";
import {useWeatherStationReference} from "@/stores/weatherStation.ts";
import {useRoute} from "vue-router";
import {computed} from "vue";
import {fetchHistoryWeatherData} from "@/core/api/weatherDataApi.ts";
import {useQuery} from "@tanstack/vue-query";
import HistoryWeatherDataTable from "@/components/weatherData/HistoryWeatherDataTable.vue";

const AVAILABLE_PERIOD_MAP: Record<string, string> = {
  [AVAILABLE_PERIOD.DAILY]: "Données de la journée",
  [AVAILABLE_PERIOD.WEEKLY]: "Données de la semaine",
  [AVAILABLE_PERIOD.MONTHLY]: "Données du mois",
  [AVAILABLE_PERIOD.YEARLY]: "Données de l'année",
  [AVAILABLE_PERIOD.RECORD]: "Record de la station"
};

const weatherStationReference = useWeatherStationReference();
const route = useRoute();

const currentPeriod = computed(() => route.params.period || AVAILABLE_PERIOD.DAILY);
const periodName = computed(() => AVAILABLE_PERIOD_MAP[currentPeriod.value]);

const {data: weatherDataHistory, isError: isWeatherDataHistoryErrored, isFetched: isWeatherDataHistoryFetched, isLoading: isWeatherDataHistoryLoading} = useQuery({
  queryKey: ['weather_data_history', {reference: weatherStationReference, period: currentPeriod}],
  queryFn: () => fetchHistoryWeatherData(weatherStationReference.value, currentPeriod.value as string),
  retry: false
});

</script>
