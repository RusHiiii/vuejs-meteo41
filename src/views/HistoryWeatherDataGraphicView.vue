<template>
  <BreadCrumb
    :url="ROUTES.HOME"
    :text="periodName"
    page="Graphiques"
  />

  <div class="fullwidth-block no-padding-top">
    <div class="container">
      <div class="row">
        <div class="fullwidth-block padding-content">
          <div class="content col-md-12">
            <div class="post single">
              <h2 class="entry-title">{{periodName}}</h2>
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
                  {{weatherDataHistory?.weatherStation.shortDescription}}
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

          <div v-if="weatherDataGraphHistory" class="content col-md-12">
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

            <PressurePeriodGraphic
              :historyGraph="weatherDataGraphHistory"
              :history="weatherDataHistory"
              :pressureValues="formatedGraphicData?.pressure"
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

const AVAILABLE_PERIOD_MAP: Record<string, string> = {
  [AVAILABLE_PERIOD.DAILY]: "Graphique de la journée",
  [AVAILABLE_PERIOD.WEEKLY]: "Graphique de la semaine",
  [AVAILABLE_PERIOD.MONTHLY]: "Graphique du mois",
  [AVAILABLE_PERIOD.YEARLY]: "Graphique de l'année"
};
const route = useRoute();

const selectedPeriod = ref<string>(route.params.period.toString() || AVAILABLE_PERIOD.DAILY);

const weatherStationReference = useCurrentWeatherStationReference();

const periodName = computed(() => AVAILABLE_PERIOD_MAP[selectedPeriod.value]);

const {data: weatherDataHistory} = useWeatherDataHistory(weatherStationReference, selectedPeriod);
const {data: weatherDataGraphHistory, isError: isWeatherDataGraphHistoryErrored} = useWeatherDataHistoryGraph(weatherStationReference, selectedPeriod);

const formatedGraphicData = computed(() => {
  const formatedGraphicData = {
    humidity: [],
    solarRadiation: [],
    uv: [],
    pressure: [],
    temperature: [],
    soilTemperature: [],
    leafWetness: [],
    dewpoint: [],
    windchill: []
  };

  if (!weatherDataGraphHistory) return formatedGraphicData;

  weatherDataGraphHistory.value.datas.map(data => {
    const observedAt = new Date(data.receivedAt).getTime();

    formatedGraphicData.humidity.push([observedAt, data.humidity]);
    formatedGraphicData.solarRadiation.push([observedAt, data.solarRadiation]);
    formatedGraphicData.uv.push([observedAt, data.uv]);
    formatedGraphicData.pressure.push([observedAt, data.relativePressure]);
    formatedGraphicData.temperature.push([observedAt, data.temperature]);
    formatedGraphicData.dewpoint.push([observedAt, data.dewPoint]);
    formatedGraphicData.windchill.push([observedAt, data.windChill]);

    /** Optionnals sensors */

    if (data.leafWetness !== null) {
      formatedGraphicData.leafWetness.push([observedAt, data.leafWetness]);
    }

    if (data.soilTemperature !== null) {
      formatedGraphicData.soilTemperature.push([observedAt, data.soilTemperature]);
    }
  })

  return formatedGraphicData;
});
</script>
