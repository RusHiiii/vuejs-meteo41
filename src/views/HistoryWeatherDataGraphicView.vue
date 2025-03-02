<template>
  <BreadCrumb
    :url="ROUTES.HOME"
    :text="periodInformation.title"
    page="Graphiques"
  />

  <div class="fullwidth-block no-padding-top">
    <div class="container">
      <div class="row">
        <div class="fullwidth-block padding-content">
          <div class="content col-md-12">
            <div class="post single">
              <h2 class="entry-title">{{periodInformation.title}}</h2>
            </div>
          </div>
          <div class="content col-md-8">
            <div class="post single">
              <div class="featured-image">
                <img
                  src="/images/chenonceau.png"
                  alt="Chenonceau"
                />
              </div>

              <div class="entry-content">
                <div v-if="isWeatherDataGraphHistoryErrored" class="primary-alert">
                  Impossible de charger les graphiques de la stations...
                </div>

                <p>
                  Les graphiques représentent les données reçues par la station localisées à  {{weatherStation?.city}}.
                  {{periodInformation.text}}
                </p>

                <div class="pagination">
                  <div class="filter">
                    <div class="count filter-control filter-right">
                      <label>Période</label>
                      <span class="select control">
                        <select v-model="selectedPeriod">
                          <option :value="AVAILABLE_PERIOD.DAILY">Jour</option>
                          <option :value="AVAILABLE_PERIOD.WEEKLY">Semaine</option>
                          <option :value="AVAILABLE_PERIOD.MONTHLY">Mois</option>
                          <option :value="AVAILABLE_PERIOD.YEARLY">Année</option>
                        </select>
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <WeatherDataSummary />

          <div class="content col-md-12">
            <TemperaturePeriodGraphic
              :historyGraph="weatherDataGraphHistory"
              :history="weatherDataHistory"
              :dewpointValues="formatedGraphicData?.dewpoint"
              :temperatureValues="formatedGraphicData?.temperature"
              :windChillValues="formatedGraphicData?.windchill"
            />

            <SoilTemperaturePeriodGraphic
              :historyGraph="weatherDataGraphHistory"
              :history="weatherDataHistory"
              :soilTemperatureValues="formatedGraphicData?.soilTemperature"
            />

            <HumidityPeriodGraphic
              :historyGraph="weatherDataGraphHistory"
              :humidityValues="formatedGraphicData?.humidity"
              :history="weatherDataHistory"
            />

            <LeafWetnessPeriodGraphic
              :historyGraph="weatherDataGraphHistory"
              :history="weatherDataHistory"
              :leafWetnessValues="formatedGraphicData?.leafWetness"
            />

            <SolarRadiationPeriodGraphic
              :historyGraph="weatherDataGraphHistory"
              :history="weatherDataHistory"
              :solarRadiationValues="formatedGraphicData?.solarRadiation"
            />

            <UvPeriodGraphic
              :historyGraph="weatherDataGraphHistory"
              :history="weatherDataHistory"
              :uvValues="formatedGraphicData?.uv"
            />

            <RainPeriodGraphic
              :historyGraph="weatherDataGraphHistory"
              :history="weatherDataHistory"
              :rainValues="formatedGraphicData?.rain"
              :rainRateValues="formatedGraphicData?.rainRate"
            />

            <PressurePeriodGraphic
              :historyGraph="weatherDataGraphHistory"
              :history="weatherDataHistory"
              :pressureValues="formatedGraphicData?.pressure"
            />

            <PMPeriodGraphic
              :historyGraph="weatherDataGraphHistory"
              :history="weatherDataHistory"
              :pm25Values="formatedGraphicData?.pm25"
              :aqiValues="formatedGraphicData?.aqi"
              :aqiAvgValues="formatedGraphicData?.aqiAvg"
            />

            <WindPeriodGraphic
              :historyGraph="weatherDataGraphHistory"
              :history="weatherDataHistory"
              :windSpeedValues="formatedGraphicData?.windSpeed"
              :windGustValues="formatedGraphicData?.windGust"
            />

            <WindDirectionPeriodGraphic
              :historyGraph="weatherDataGraphHistory"
              :history="weatherDataHistory"
              :windDirectionValues="formatedGraphicData?.windDirection"
            />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script setup lang="ts">
import {AVAILABLE_PERIOD, ROUTES} from "@/core/constant.ts";
import BreadCrumb from "@/components/common/BreadCrumb.vue";
import WeatherDataSummary from "@/components/common/weatherData/WeatherDataSummary.vue";
import {useCurrentWeatherStationReference} from "@/stores/weatherStation.ts";
import {useWeatherDataHistory, useWeatherDataHistoryGraph} from "@/hooks/weatherDataHook.ts";
import {useRoute} from "vue-router";
import {computed, ref} from "vue";
import HumidityPeriodGraphic from "@/components/graphic/HumidityPeriodGraphic.vue";
import SoilTemperaturePeriodGraphic from "@/components/graphic/SoilTemperaturePeriodGraphic.vue";
import LeafWetnessPeriodGraphic from "@/components/graphic/LeafWetnessPeriodGraphic.vue";
import UvPeriodGraphic from "@/components/graphic/UvPeriodGraphic.vue";
import PressurePeriodGraphic from "@/components/graphic/PressurePeriodGraphic.vue";
import TemperaturePeriodGraphic from "@/components/graphic/TemperaturePeriodGraphic.vue";
import SolarRadiationPeriodGraphic from "@/components/graphic/SolarRadiationPeriodGraphic.vue";
import type {WeatherGraphData} from "@/core/types/WeatherData.tsx";
import RainPeriodGraphic from "@/components/graphic/RainPeriodGraphic.vue";
import PMPeriodGraphic from "@/components/graphic/PMPeriodGraphic.vue";
import {useWeatherStation} from "@/hooks/weatherStationHook.ts";
import WindPeriodGraphic from "@/components/graphic/WindPeriodGraphic.vue";
import WindDirectionPeriodGraphic from "@/components/graphic/WindDirectionPeriodGraphic.vue";

const AVAILABLE_PERIOD_MAP: Record<string, {title: string, text: string}> = {
  [AVAILABLE_PERIOD.DAILY]: {
    title: "Graphique de la journée",
    text: "Les données journalières sont espacées toutes les 2 minutes."
  },
  [AVAILABLE_PERIOD.WEEKLY]: {
    title: "Graphique de la semaine",
    text: "Les données hebdomadaires sont espacées toutes les 10 minutes."
  },
  [AVAILABLE_PERIOD.MONTHLY]: {
    title: "Graphique du mois",
    text: "Les données mensuels sont espacées toutes les 30 minutes."
  },
  [AVAILABLE_PERIOD.YEARLY]: {
    title: "Graphique de l'année",
    text: "Les données annuelles sont espacées toutes les 120 minutes."
  }
};
const route = useRoute();

const selectedPeriod = ref<string>(route.params.period.toString() || AVAILABLE_PERIOD.DAILY);

const weatherStationReference = useCurrentWeatherStationReference();

const periodInformation = computed(() => AVAILABLE_PERIOD_MAP[selectedPeriod.value]);

const {data: weatherDataHistory} = useWeatherDataHistory(weatherStationReference, selectedPeriod);
const {data: weatherStation} = useWeatherStation(weatherStationReference);
const {data: weatherDataGraphHistory, isError: isWeatherDataGraphHistoryErrored} = useWeatherDataHistoryGraph(weatherStationReference, selectedPeriod);

const formatedGraphicData = computed((previous) => {
  const formatedGraphicData = {
    humidity: [],
    solarRadiation: [],
    uv: [],
    pressure: [],
    temperature: [],
    soilTemperature: [],
    leafWetness: [],
    dewpoint: [],
    windchill: [],
    rain: [],
    aqi: [],
    aqiAvg: [],
    pm25: [],
    rainRate: [],
    windGust: [],
    windSpeed: [],
    windDirection: []
  };

  if (!weatherDataGraphHistory.value) return formatedGraphicData;

  weatherDataGraphHistory.value.datas.forEach((data: WeatherGraphData) => {
    const observedAt = new Date(data.receivedAt).getTime();

    formatedGraphicData.humidity.push([observedAt, data.humidity]);
    formatedGraphicData.solarRadiation.push([observedAt, data.solarRadiation]);
    formatedGraphicData.uv.push([observedAt, data.uv]);
    formatedGraphicData.pressure.push([observedAt, data.relativePressure]);
    formatedGraphicData.temperature.push([observedAt, data.temperature]);
    formatedGraphicData.dewpoint.push([observedAt, data.dewPoint]);
    formatedGraphicData.windchill.push([observedAt, data.windChill]);
    formatedGraphicData.rain.push([observedAt, data.rainDaily]);
    formatedGraphicData.rainRate.push([observedAt, data.rainRate]);
    formatedGraphicData.windGust.push([observedAt, data.windGust]);
    formatedGraphicData.windSpeed.push([observedAt, data.windSpeed]);
    formatedGraphicData.windDirection.push([observedAt, data.windDirection]);

    if (data.leafWetness != null) formatedGraphicData.leafWetness.push([observedAt, data.leafWetness]);
    if (data.soilTemperature != null) formatedGraphicData.soilTemperature.push([observedAt, data.soilTemperature]);
    if (data.pm25 != null) formatedGraphicData.pm25.push([observedAt, data.pm25]);
    if (data.aqi != null) formatedGraphicData.aqi.push([observedAt, data.aqi]);
    if (data.aqiAvg != null) formatedGraphicData.aqiAvg.push([observedAt, data.aqiAvg]);
  })

  return formatedGraphicData;
});
</script>
