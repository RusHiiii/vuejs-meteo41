<template>
  <table class="table-obs" width="100%">
    <caption class="caption-obs">
      <strong>{{periodName}} à {{weatherData.weatherStation.city}}</strong> (heure locale)
    </caption>
    <tbody>
    <tr>
      <td colSpan="4" class="table-obs-header">
        <strong>Température et humidité</strong>
      </td>
    </tr>
    <tr class="table-obs-first-data min-max">
      <td>Température maximale</td>
      <td>
        {{weatherData.maxTemperature}} {{weatherData.unit.temperatureUnit}}
      </td>
      <td>
        à <DateHelper :date="weatherData.maxTemperatureReceivedAt" format="LT" />
        , le
        <DateHelper :date="weatherData.maxTemperatureReceivedAt" format="LL" />
      </td>
    </tr>
    <tr class="min-max">
      <td>Température minimale</td>
      <td>
        {{weatherData.minTemperature}} {{weatherData.unit.temperatureUnit}}
      </td>
      <td>
        à <DateHelper :date="weatherData.minTemperatureReceivedAt" format="LT" />
        , le
        <DateHelper :date="weatherData.minTemperatureReceivedAt" format="LL" />
      </td>
    </tr>
    <tr class="min-max">
      <td>Écart de température</td>
      <td>
        {{(weatherData.maxTemperature - weatherData.minTemperature).toFixed(1)}}
        {{weatherData.unit.temperatureUnit}}
      </td>
      <td></td>
    </tr>
    <tr class="min-max">
      <td>Température du sol maximale</td>
      <td>
        {{weatherData.maxSoilTemperature}} {{weatherData.unit.temperatureUnit}}
      </td>
      <td>
        à <DateHelper :date="weatherData.maxSoilTemperatureReceivedAt" format="LT" />
        , le
        <DateHelper :date="weatherData.maxSoilTemperatureReceivedAt" format="LL" />
      </td>
    </tr>
    <tr class="min-max">
      <td>Température du sol minimale</td>
      <td>
        {{weatherData.minSoilTemperature}} {{weatherData.unit.temperatureUnit}}
      </td>
      <td>
        à <DateHelper :date="weatherData.minSoilTemperatureReceivedAt" format="LT" />
        , le
        <DateHelper :date="weatherData.minSoilTemperatureReceivedAt" format="LL" />
      </td>
    </tr>
    <tr class="min-max">
      <td>Écart de température du sol</td>
      <td>
        {{(weatherData.maxSoilTemperature - weatherData.minSoilTemperature).toFixed(1)}}
        {{weatherData.unit.temperatureUnit}}
      </td>
      <td></td>
    </tr>
    <tr class="min-max">
      <td>Humidex maximal</td>
      <td>
        {{weatherData.maxHumidex}} {{weatherData.unit.temperatureUnit}}
      </td>
      <td>
        à <DateHelper :date="weatherData.maxHumidexReceivedAt" format="LT" />, le
        <DateHelper :date="weatherData.maxHumidexReceivedAt" format="LL" />
      </td>
    </tr>
    <tr class="min-max">
      <td>Humidex minimal</td>
      <td>
        {{weatherData.minHumidex}} {{weatherData.unit.temperatureUnit}}
      </td>
      <td>
        à <DateHelper :date="weatherData.minHumidexReceivedAt" format="LT" />, le
        <DateHelper :date="weatherData.minHumidexReceivedAt" format="LL" />
      </td>
    </tr>
    <tr class="min-max">
      <td>Point de rosée minimal</td>
      <td>
        {{weatherData.minDewPoint}} {{weatherData.unit.temperatureUnit}}
      </td>
      <td>
        à <DateHelper :date="weatherData.minDewPointReceivedAt" format="LT" />,
        le <DateHelper :date="weatherData.minDewPointReceivedAt" format="LL" />
      </td>
    </tr>
    <tr class="min-max">
      <td>Point de rosée maximal</td>
      <td>
        {{weatherData.maxDewPoint}} {{weatherData.unit.temperatureUnit}}
      </td>
      <td>
        à <DateHelper :date="weatherData.maxDewPointReceivedAt" format="LT" />,
        le <DateHelper :date="weatherData.maxDewPointReceivedAt" format="LL" />
      </td>
    </tr>
    <tr class="min-max">
      <td>Heat Index minimal</td>
      <td>
        {{weatherData.minHeatIndex}} {{weatherData.unit.temperatureUnit}}
      </td>
      <td>
        à <DateHelper :date="weatherData.minHeatIndexReceivedAt" format="LT" />,
        le <DateHelper :date="weatherData.minHeatIndexReceivedAt" format="LL" />
      </td>
    </tr>
    <tr class="min-max">
      <td>Heat Index maximal</td>
      <td>
        {{weatherData.maxHeatIndex}} {{weatherData.unit.temperatureUnit}}
      </td>
      <td>
        à <DateHelper :date="weatherData.maxHeatIndexReceivedAt" format="LT" />,
        le <DateHelper :date="weatherData.maxHeatIndexReceivedAt" format="LL" />
      </td>
    </tr>
    <tr class="min-max">
      <td>Facteur éolien maximum</td>
      <td>
        {{weatherData.maxWindChill}} {{weatherData.unit.temperatureUnit}}
      </td>
      <td>
        à <DateHelper :date="weatherData.maxWindChillReceivedAt" format="LT" />,
        le <DateHelper :date="weatherData.maxWindChillReceivedAt" format="LL" />
      </td>
    </tr>
    <tr class="min-max">
      <td>Facteur éolien minimum</td>
      <td>
        {{weatherData.minWindChill}} {{weatherData.unit.temperatureUnit}}
      </td>
      <td>
        à <DateHelper :date="weatherData.minWindChillReceivedAt" format="LT" />,
        le <DateHelper :date="weatherData.minWindChillReceivedAt" format="LL" />
      </td>
    </tr>
    <tr class="min-max">
      <td>Humidité maximale</td>
      <td>
        {{weatherData.maxHumidity}} {{weatherData.unit.humidityUnit}}
      </td>
      <td>
        à <DateHelper :date="weatherData.maxHumidityReceivedAt" format="LT" />,
        le <DateHelper :date="weatherData.maxHumidityReceivedAt" format="LL" />
      </td>
    </tr>
    <tr class="min-max">
      <td>Humidité minimale</td>
      <td>
        {{weatherData.minHumidity}} {{weatherData.unit.humidityUnit}}
      </td>
      <td>
        à <DateHelper :date="weatherData.minHumidityReceivedAt" format="LT" />,
        le <DateHelper :date="weatherData.minHumidityReceivedAt" format="LL" />
      </td>
    </tr>
    <tr class="table-obs-last-data min-max">
      <td>Humidité foliaire maximale</td>
      <td>
        {{weatherData.maxLeafWetness}} {{weatherData.unit.humidityUnit}}
      </td>
      <td>
        à <DateHelper :date="weatherData.maxLeafWetnessReceivedAt" format="LT" />,
        le <DateHelper :date="weatherData.maxLeafWetnessReceivedAt" format="LL" />
      </td>
    </tr>
    <tr>
      <td colSpan="4" class="table-obs-header">
        <strong>Pression atmosphérique</strong>
      </td>
    </tr>
    <tr class="table-obs-first-data min-max">
      <td>Pression la plus haute</td>
      <td>
        {{weatherData.maxRelativePressure}} {{weatherData.unit.pressureUnit}}
      </td>
      <td>
        à
        <DateHelper
          :date="weatherData.maxRelativePressureReceivedAt"
          format="LT"
        />
        , le
        <DateHelper
          :date="weatherData.maxRelativePressureReceivedAt"
          format="LT"
        />
      </td>
    </tr>
    <tr class="table-obs-last-data min-max">
      <td>Pression la plus basse</td>
      <td>
        {{weatherData.minRelativePressure}} {{weatherData.unit.pressureUnit}}
      </td>
      <td>
        à
        <DateHelper
          :date="weatherData.minRelativePressureReceivedAt"
          format="LT"
        />
        , le
        <DateHelper
          :date="weatherData.minRelativePressureReceivedAt"
          format="LT"
        />
      </td>
    </tr>
    <tr>
      <td colSpan="4" class="table-obs-header">
        <strong>Précipitations</strong>
      </td>
    </tr>
    <tr class="table-obs-first-data min-max">
      <td>Taux de pluie maximum</td>
      <td>
        {{weatherData.maxRainRate}} {{weatherData.unit.rainUnit}}
      </td>
      <td>
        à <DateHelper :date="weatherData.maxRainRateReceivedAt" format="LT" />,
        le <DateHelper :date="weatherData.maxRainRateReceivedAt" format="LL" />
      </td>
    </tr>
    <tr class="min-max">
      <td>Pluviométrie</td>
      <td>
        {{weatherData.rainPeriod}} {{weatherData.unit.rainUnit}}
      </td>
      <td></td>
    </tr>
    <tr class="table-obs-last-data min-max">
      <td>Période de pluie</td>
      <td>
        {{weatherData.maxRainEvent}} {{weatherData.unit.rainUnit}}
      </td>
      <td>
        à <DateHelper :date="weatherData.maxRainEventReceivedAt" format="LT" />,
        le <DateHelper :date="weatherData.maxRainEventReceivedAt" format="LL" />
      </td>
    </tr>
    <tr>
      <td colSpan="4" class="table-obs-header">
        <strong>Vents</strong>
      </td>
    </tr>
    <tr class="table-obs-first-data min-max">
      <td>Rafale maximale</td>
      <td>
        {{weatherData.maxWindGust}} {{weatherData.unit.speedUnit}}
      </td>
      <td>
        à <DateHelper :date="weatherData.maxWindGustReceivedAt" format="LT" />,
        le <DateHelper :date="weatherData.maxWindGustReceivedAt" format="LL" />
      </td>
    </tr>
    <tr class="table-obs-last-data min-max">
      <td>Échelle de Beaufort maximal</td>
      <td>{{maxBeaufortScale}}</td>
      <td>
        à
        <DateHelper :date="weatherData.maxBeaufortScaleReceivedAt" format="LT" />
        , le
        <DateHelper :date="weatherData.maxBeaufortScaleReceivedAt" format="LL" />
      </td>
    </tr>
    <tr>
      <td colSpan="4" class="table-obs-header">
        <strong>Qualité de l'air</strong>
      </td>
    </tr>
    <tr class="table-obs-first-data min-max">
      <td>Particule fine moyenne</td>
      <td>
        {{weatherData.avgPm25}} {{weatherData.unit.pmUnit}}
      </td>
      <td></td>
    </tr>
    <tr class="min-max">
      <td>Indice de qualité moyen</td>
      <td>{{weatherData.avgAqi}}</td>
      <td></td>
    </tr>
    <tr class="min-max">
      <td>Qualité de l'air moyen</td>
      <td>{{avgAqi}}</td>
      <td></td>
    </tr>
    <tr class="min-max">
      <td>Particule fine maximal</td>
      <td>
        {{weatherData.maxPm25}} {{weatherData.unit.pmUnit}}
      </td>
      <td>
        à <DateHelper :date="weatherData.maxPm25ReceivedAt" format="LT" />, le
        <DateHelper :date="weatherData.maxPm25ReceivedAt" format="LL" />
      </td>
    </tr>
    <tr class="min-max">
      <td>Indice de qualité maximal</td>
      <td>{{weatherData.maxAqi}}</td>
      <td>
        à <DateHelper :date="weatherData.maxAqiReceivedAt" format="LT" />, le
        <DateHelper :date="weatherData.maxAqiReceivedAt" format="LL" />
      </td>
    </tr>
    <tr class="table-obs-last-data min-max">
      <td>Qualité de l'air maximal</td>
      <td>{{maxAqi}}</td>
      <td></td>
    </tr>
    <tr>
      <td colSpan="4" class="table-obs-header">
        <strong>Radiation solaire et UV</strong>
      </td>
    </tr>
    <tr class="table-obs-first-data min-max">
      <td>Radiation solaire maximale</td>
      <td>
        {{weatherData.maxSolarRadiation}}
        {{weatherData.unit.solarRadiationUnit}}
      </td>
      <td>
        à
        <DateHelper
          :date="weatherData.maxSolarRadiationReceivedAt"
          format="LT"
        />
        , le
        <DateHelper
          :date="weatherData.maxSolarRadiationReceivedAt"
          format="LL"
        />
      </td>
    </tr>
    <tr class="table-obs-last-data min-max">
      <td>UV maximal</td>
      <td>{{weatherData.maxUv}}</td>
      <td>
        à <DateHelper :date="weatherData.maxUvReceivedAt" format="LT" />, le
        <DateHelper :date="weatherData.maxUvReceivedAt" format="LL" />
      </td>
    </tr>
    <tr>
      <td colSpan="4" class="table-obs-header">
        <strong>Foudre</strong>
      </td>
    </tr>
    <tr class="table-obs-first-data min-max">
      <td>Impact de foudre</td>
      <td>
        {{weatherData.lightningNumber}} impact(s)
      </td>
      <td></td>
    </tr>
    <tr class="min-max">
      <td>Distance minimale</td>
      <td>{{weatherData.maxLightningDistance}} km</td>
      <td>
        à <DateHelper :date="weatherData.maxLightningDistanceReceivedAt" format="LT" />, le
        <DateHelper :date="weatherData.maxLightningDistanceReceivedAt" format="LL" />
      </td>
    </tr>
    <tr class="table-obs-last-data min-max">
      <td>Distance maximale</td>
      <td>{{weatherData.minLightningDistance}} km</td>
      <td>
        à <DateHelper :date="weatherData.minLightningDistanceReceivedAt" format="LT" />, le
        <DateHelper :date="weatherData.minLightningDistanceReceivedAt" format="LL" />
      </td>
    </tr>
    </tbody>
  </table>
</template>

<script setup lang="ts">
import type {HistoryWeatherData} from "@/common/types/WeatherData.tsx";
import DateHelper from "@/components/common/DateHelper.vue";
import {computed} from "vue";
import {beaufortScaleToText} from "@/utils/weatherData/beaufortScaleToText.ts";
import {aqiToText} from "@/utils/weatherData/aqiToText.ts";

const props = defineProps<{
  weatherData: HistoryWeatherData,
  periodName: string
}>()

const maxBeaufortScale = computed(() => beaufortScaleToText(props.weatherData.maxBeaufortScale));
const avgAqi = computed(() => aqiToText(props.weatherData.avgAqi));
const maxAqi = computed(() => aqiToText(props.weatherData.maxAqi));
</script>
