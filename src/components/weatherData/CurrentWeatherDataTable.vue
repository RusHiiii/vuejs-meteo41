<template>
  <table class="table-obs" width="100%">
    <caption class="caption-obs">
      <strong>
        Observations à {{weatherData.weatherStation.city}}
        le
        <DateHelper :date="weatherData.receivedAt" format="LL" />
        à
        <DateHelper :date="weatherData.receivedAt" format="LT" />
      </strong>
      (heure locale)
    </caption>

    <tbody>
      <tr>
        <td colSpan="4" class="table-obs-header">
          <strong>Température et humidité</strong>
        </td>
      </tr>
      <tr class="table-obs-first-data">
        <td>Température</td>
        <td>
          {{weatherData.temperature}} {{weatherData.unit.temperatureUnit}}
        </td>
        <td>Variation depuis 1h</td>
        <td>
          {{temperatureVariation}}
        </td>
      </tr>
      <tr>
        <td>Température du sol (-30cm)</td>
        <td>
          {{soilTemperature}}
        </td>
        <td>Variation depuis 1h</td>
        <td>
          {{soilTemperatureVariation}}
        </td>
      </tr>
      <tr>
        <td>Humidex</td>
        <td>
          {{weatherData.humidex}} {{weatherData.unit.temperatureUnit}}
        </td>
        <td>Variation depuis 1h</td>
        <td>
          {{humidexVariation}}
        </td>
      </tr>
      <tr>
        <td>Point de rosée</td>
        <td>
          {{weatherData.dewPoint}} {{weatherData.unit.temperatureUnit}}
        </td>
        <td>Heat Index</td>
        <td>
          {{weatherData.heatIndex}} {{weatherData.unit.temperatureUnit}}
        </td>
      </tr>
      <tr>
        <td>Facteur éolien</td>
        <td>
          {{weatherData.windChill}} {{weatherData.unit.temperatureUnit}}
        </td>
        <td>Humidité</td>
        <td>
          {{weatherData.humidity}}
          {{weatherData.unit.humidityUnit}}
        </td>
      </tr>
      <tr>
        <td>Humidité foliaire</td>
        <td>
          {{leafWetness}}
        </td>
        <td>Couvert. nuageuse</td>
        <td>
          {{weatherData.cloudBase}} {{weatherData.unit.cloudBaseUnit}}
        </td>
      </tr>
      <tr class="table-obs-last-data">
        <td>Observation</td>
        <td>{{observation}}</td>
        <td></td>
        <td></td>
      </tr>
      <tr>
        <td colSpan="4" class="table-obs-header">
          <strong>Pression atmosphérique</strong>
        </td>
      </tr>
      <tr class="table-obs-first-data table-obs-last-data">
        <td>Baromètre</td>
        <td>
          {{weatherData.relativePressure}} {{weatherData.unit.pressureUnit}}
        </td>
        <td>Variation depuis 1h</td>
        <td>
          {{relativePressureVariation}}
        </td>
      </tr>
      <tr>
        <td colSpan="4" class="table-obs-header">
          <strong>Précipitations</strong>
        </td>
      </tr>
      <tr class="table-obs-first-data">
        <td>Averse</td>
        <td>
          {{weatherData.rainRate}} {{weatherData.unit.rainUnit}}/hr
        </td>
        <td>Période de pluie</td>
        <td>
          {{weatherData.rainEvent}} {{weatherData.unit.rainUnit}}
        </td>
      </tr>
      <tr>
        <td>L'heure passée</td>
        <td>
          {{weatherData.rainHourly}} {{weatherData.unit.rainUnit}}
        </td>
        <td>Total aujourd'hui</td>
        <td>
          {{weatherData.rainDaily}} {{weatherData.unit.rainUnit}}
        </td>
      </tr>
      <tr>
        <td>Total pour la semaine</td>
        <td>
          {{weatherData.rainWeekly}} {{weatherData.unit.rainUnit}}
        </td>
        <td>Total pour le mois</td>
        <td>
          {{weatherData.rainMonthly}} {{weatherData.unit.rainUnit}}
        </td>
      </tr>
      <tr class="table-obs-last-data">
        <td>Total pour l'année</td>
        <td>
          {{weatherData.rainYearly}} {{weatherData.unit.rainUnit}}
        </td>
        <td></td>
        <td></td>
      </tr>
      <tr>
        <td colSpan="4" class="table-obs-header">
          <strong>Vents</strong>
        </td>
      </tr>
      <tr class="table-obs-first-data">
        <td>Vitesse actuelle</td>
        <td>
          {{weatherData.windSpeed}} {{weatherData.unit.speedUnit}}
        </td>
        <td>Direction du vent</td>
        <td>{{windDirection}}</td>
      </tr>
      <tr class="td_data">
        <td>Échelle de Beaufort</td>
        <td>F{{weatherData.beaufortScale}}</td>
        <td>{{beaufortScale}}</td>
      </tr>
      <tr class="td_data">
        <td>Vent (moy/10mn)</td>
        <td>
          {{weatherData.windSpeedAvg}} {{weatherData.unit.speedUnit}}
        </td>
        <td>Direction (moy/10mn)</td>
        <td>{{windDirectionAvg}}</td>
      </tr>
      <tr class="table-obs-last-data">
        <td>Vent (rafale)</td>
        <td>
          {{weatherData.windGust}} {{weatherData.unit.speedUnit}}
        </td>
        <td>Vent (rafale max.)</td>
        <td>
          {{weatherData.windMaxDailyGust}} {{weatherData.unit.speedUnit}}
        </td>
      </tr>
      <tr>
        <td colSpan="4" class="table-obs-header">
          <strong>Qualité de l'air</strong>
        </td>
      </tr>
      <tr class="table-obs-first-data">
        <td>Particule fine</td>
        <td>
          {{weatherData.pm25}} {{weatherData.unit.pmUnit}}
        </td>
        <td>Indice de qualité</td>
        <td>{{weatherData.aqi}}</td>
      </tr>
      <tr class="td_data">
        <td>Particule fine (moy/24h)</td>
        <td>
          {{weatherData.pm25Avg}} {{weatherData.unit.pmUnit}}
        </td>
        <td>Indice de qualité (moy/24h)</td>
        <td>{{weatherData.aqiAvg}}</td>
      </tr>
      <tr class="table-obs-last-data">
        <td>Etat de l'air</td>
        <td>{{aqi}}</td>
        <td></td>
        <td></td>
      </tr>
      <tr>
        <td colSpan="4" class="table-obs-header">
          <strong>Radiation solaire et UV</strong>
        </td>
      </tr>
      <tr class="table-obs-first-data">
        <td>Radiation solaire</td>
        <td>
          {{weatherData.solarRadiation}} {{weatherData.unit.solarRadiationUnit}}
        </td>
        <td>Variation depuis 1h</td>
        <td>
          {{solarRadiationVariation}}
        </td>
      </tr>
      <tr class="table-obs-last-data">
        <td>UV</td>
        <td>{{weatherData.uv}}</td>
        <td></td>
        <td></td>
      </tr>
      <tr>
        <td colSpan="4" class="table-obs-header">
          <strong>Foudre</strong>
        </td>
      </tr>
      <tr class="table-obs-first-data table-obs-last-data">
        <td>Impact de foudre</td>
        <td>
          {{weatherData.lightningDaily}} impact(s)
        </td>
      </tr>
      <tr>
        <td colSpan="4" class="table-obs-header">
          <strong>Notre localisation</strong>
        </td>
      </tr>
      <tr class="table-obs-first-data">
        <td>Latitude</td>
        <td>{{weatherData.weatherStation.lat}}</td>
        <td>Longitude</td>
        <td>{{weatherData.weatherStation.lng}}</td>
      </tr>
      <tr class="table-obs-last-data">
        <td>Altitude</td>
        <td colSpan="0">{{weatherData.weatherStation.elevation}}</td>
        <td>Lieu</td>
        <td>{{weatherData.weatherStation.city}}</td>
      </tr>
    </tbody>
  </table>
</template>

<script setup lang="ts">
import type {DetailWeatherData} from "@/common/types/WeatherData.tsx";
import type {Observation} from "@/common/types/Observation.tsx";
import DateHelper from "@/components/common/DateHelper.vue";
import {computed} from "vue";
import {showVariation} from "@/utils/weatherData/showVariation.ts";
import {showOptionnalSensor} from "@/utils/weatherData/showOptionnalSensor.ts";
import {showObservation} from "@/utils/weatherData/showObservation.ts";
import {degToCompass} from "@/utils/weatherData/degToCompass.ts";
import {beaufortScaleToText} from "@/utils/weatherData/beaufortScaleToText.ts";
import {aqiToText} from "@/utils/weatherData/aqiToText.ts";

const props = defineProps<{
  weatherData: DetailWeatherData,
  observation: Observation|null
}>()

const temperatureVariation = computed(() => showVariation(props.weatherData.temperatureVariation, props.weatherData.unit.temperatureUnit))
const humidexVariation = computed(() => showVariation(props.weatherData.humidexVariation, props.weatherData.unit.temperatureUnit))
const soilTemperatureVariation = computed(() => showVariation(props.weatherData.soilTemperatureVariation, props.weatherData.unit.temperatureUnit))
const relativePressureVariation = computed(() => showVariation(props.weatherData.relativePressureVariation, props.weatherData.unit.pressureUnit))
const solarRadiationVariation = computed(() => showVariation(props.weatherData.solarRadiationVariation, props.weatherData.unit.solarRadiationUnit))

const soilTemperature = computed(() => showOptionnalSensor(props.weatherData.soilTemperature, props.weatherData.unit.temperatureUnit))
const leafWetness = computed(() => showOptionnalSensor(props.weatherData.leafWetness, props.weatherData.unit.humidityUnit, 0))
const windDirection = computed(() => degToCompass(props.weatherData.windDirection))
const beaufortScale = computed(() => beaufortScaleToText(props.weatherData.beaufortScale))
const windDirectionAvg = computed(() => degToCompass(props.weatherData.windDirectionAvg))
const aqi = computed(() => aqiToText(props.weatherData.aqi))

const observation = computed(() => showObservation(props.observation));
</script>
