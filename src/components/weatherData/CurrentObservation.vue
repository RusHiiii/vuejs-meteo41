<template>
  <div class="forecast-header">
    <div class="day">
      Observations à {{weatherData.weatherStation.city}}
      le
      <DateHelper :date="weatherData.receivedAt" format="LL" />
      à
      <DateHelper :date="weatherData.receivedAt" format="LT" />
    </div>
  </div>
  <div class="forecast-content obs-content">
    <div class="text-center home-temp">
      <div class="temp">
        <div class="current-temp">
          <h3>
            <WeatherDataTooltip
                :currentValue="temperature"
                :minValue="weatherDataDaily.minTemperature"
                :maxValue="weatherDataDaily.maxTemperature"
                :unit="weatherDataDaily.unit.temperatureUnit"
                :minReceivedAt="weatherDataDaily.minTemperatureReceivedAt"
                :maxReceivedAt="weatherDataDaily.maxTemperatureReceivedAt"
            />
            <small class="celsius">
              {{weatherData.unit.temperatureUnit}}
            </small>
          </h3>
          <div class="windchill">
            Windchill
            <strong class="windchill-value">
              <WeatherDataTooltip
                  :currentValue="windChill"
                  :minValue="weatherDataDaily.minWindChill"
                  :maxValue="weatherDataDaily.maxWindChill"
                  :unit="weatherDataDaily.unit.temperatureUnit"
                  :minReceivedAt="weatherDataDaily.minWindChillReceivedAt"
                  :maxReceivedAt="weatherDataDaily.maxWindChillReceivedAt"
              />
              {{weatherData.unit.temperatureUnit}}
            </strong>
          </div>
          <div class="dewpoint">
            Point de rosée
            <strong class="dewpoint-value">
              <WeatherDataTooltip
                  :currentValue="dewPoint"
                  :minValue="weatherDataDaily.minDewPoint"
                  :maxValue="weatherDataDaily.maxDewPoint"
                  :unit="weatherDataDaily.unit.temperatureUnit"
                  :minReceivedAt="weatherDataDaily.minDewPointReceivedAt"
                  :maxReceivedAt="weatherDataDaily.maxDewPointReceivedAt"
              />
              {{weatherData.unit.temperatureUnit}}
            </strong>
          </div>
          <div class="humidex">
            Humidex
            <strong class="humidex-value">
              <WeatherDataTooltip
                  :currentValue="humidex"
                  :minValue="weatherDataDaily.minHumidex"
                  :maxValue="weatherDataDaily.maxHumidex"
                  :unit="weatherDataDaily.unit.temperatureUnit"
                  :minReceivedAt="weatherDataDaily.minHumidexReceivedAt"
                  :maxReceivedAt="weatherDataDaily.maxHumidexReceivedAt"
              />
              {{weatherData.unit.temperatureUnit}}
            </strong>
          </div>
          <div class="heatindex">
            Heat Index
            <strong class="heatindex-value">
              <WeatherDataTooltip
                  :currentValue="heatIndex"
                  :minValue="weatherDataDaily.minHeatIndex"
                  :maxValue="weatherDataDaily.maxHeatIndex"
                  :unit="weatherDataDaily.unit.temperatureUnit"
                  :minReceivedAt="weatherDataDaily.minHeatIndexReceivedAt"
                  :maxReceivedAt="weatherDataDaily.maxHeatIndexReceivedAt"
              />
              {{weatherData.unit.temperatureUnit}}
            </strong>
          </div>
        </div>
      </div>
    </div>
    <div class="text-center other-value">
      <div>
        <div class="container-value">
          <table class="table-obs-home">
            <tbody>
              <tr class="tr-home">
                <td>
                  <span class="wind-span">
                    <i :class="['wi', 'wi-wind', `towards-${windDirectionAvg}-deg`]" :title="windDirectionAvgDeg" />
                  </span>
                </td>
                <td class="td-value-obs">
                  <strong class="wind-value">
                    {{weatherData.windSpeed}}
                  </strong>
                </td>
                <td>
                  <small class="wind-unit">
                    {{weatherData.unit.speedUnit}}
                  </small>
                </td>
              </tr>
              <tr>
                <td>
                  <span>
                    <i class="fa fa-tachometer" title="Pression" />
                  </span>
                </td>
                <td class="td-value-obs">
                  <strong>
                    <WeatherDataTooltip
                        :currentValue="relativePressure"
                        :minValue="weatherDataDaily.minRelativePressure"
                        :maxValue="weatherDataDaily.maxRelativePressure"
                        :unit="weatherDataDaily.unit.pressureUnit"
                        :minReceivedAt="weatherDataDaily.minRelativePressureReceivedAt"
                        :maxReceivedAt="weatherDataDaily.maxRelativePressureReceivedAt"
                    />
                  </strong>
                </td>
                <td>
                  <small>{{weatherData.unit.pressureUnit}}</small>
                </td>
              </tr>
              <tr>
                <td>
                  <span>
                    <i class="wi wi-humidity" title="Humidité" />
                  </span>
                </td>
                <td class="td-value-obs">
                  <strong>
                    <WeatherDataTooltip
                        :currentValue="humidity"
                        :minValue="weatherDataDaily.minHumidity"
                        :maxValue="weatherDataDaily.maxHumidity"
                        :unit="weatherDataDaily.unit.humidityUnit"
                        :minReceivedAt="weatherDataDaily.minHumidityReceivedAt"
                        :maxReceivedAt="weatherDataDaily.maxHumidityReceivedAt"
                    />
                  </strong>
                </td>
                <td>
                  <small>{{weatherData.unit.humidityUnit}}</small>
                </td>
              </tr>
              <tr>
                <td>
                  <span>
                    <i class="wi wi-dust" title="Particules fines" />
                  </span>
                </td>
                <td class="td-value-obs">
                  <strong>
                    <WeatherDataTooltip
                        :currentValue="pm25"
                        :minValue="weatherDataDaily.minPm25"
                        :maxValue="weatherDataDaily.maxPm25"
                        :unit="weatherDataDaily.unit.pmUnit"
                        :minReceivedAt="weatherDataDaily.minPm25ReceivedAt"
                        :maxReceivedAt="weatherDataDaily.maxPm25ReceivedAt"
                    />
                  </strong>
                </td>
                <td>
                  <small>{{weatherData.unit.pmUnit}}</small>
                </td>
              </tr>
              <tr>
                <td>
                  <span>
                    <i class="wi wi-lightning" title="Impact de foudre (jour)"/>
                  </span>
                </td>
                <td class="td-value-obs">
                  <strong>
                    <WeatherDataTooltip
                        :currentValue="lightningDaily"
                        :minValue="weatherDataDaily.minLightningDistance"
                        :maxValue="weatherDataDaily.maxLightningDistance"
                        :minReceivedAt="weatherDataDaily.minLightningDistanceReceivedAt"
                        :maxReceivedAt="weatherDataDaily.maxLightningDistanceReceivedAt"
                        unit="km"
                    />
                  </strong>
                </td>
                <td>
                  <small>impact(s)</small>
                </td>
              </tr>
              <tr>
                <td>
                  <span>
                    <i class="fa fa-cloud" title="Base des nuages" />
                  </span>
                </td>
                <td class="td-value-obs">
                  <strong>{{weatherData.cloudBase}}</strong>
                </td>
                <td>
                  <small>{{weatherData.unit.cloudBaseUnit}}</small>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
    <div class="text-center ephemeride">
      <div class="sun-moon">
        <table>
          <tbody>
            <tr>
              <td class="ephemeride-logo-moon" rowSpan="2">
                <i class="wi wi-moon-alt-waxing-crescent-5"/>
              </td>
              <td>
                <span>
                  <i class="wi wi-moonset"></i>
                </span>
                <DateHelper
                  :date="moon.rise"
                  format="LT"
                />
              </td>
            </tr>
            <tr>
              <td>
                <span>
                  <i class="wi wi-moonrise"></i>
                </span>
                <DateHelper
                  :date="moon.set"
                  format="LT"
                />
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
    <div class="text-center ephemeride">
      <table>
        <tbody>
        <tr>
          <td class="ephemeride-logo-sun" rowSpan="2">
            <i class="wi wi-day-sunny"></i>
          </td>
          <td>
            <span>
              <i class="wi wi-sunset"></i>
            </span>
            <DateHelper
              :date="sun.sunrise"
              format="LT"
            />
          </td>
        </tr>
        <tr>
          <td>
            <span>
              <i class="wi wi-sunrise"></i>
            </span>
            <DateHelper
              :date="sun.sunset"
              format="LT"
            />
          </td>
        </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script setup lang="ts">
import type {DetailWeatherData, HistoryWeatherData} from "@/core/types/WeatherData.tsx";
import DateHelper from "@/components/common/DateHelper.vue";
import {computed} from "vue";
import { getMoonTimes, getTimes } from 'suncalc';
import {showFixedValue} from "@/core/utils/weatherData/showFixedValue.ts";
import {degToCompass} from "@/core/utils/weatherData/degToCompass.ts";
import WeatherDataTooltip from "@/components/common/weatherData/WeatherDataTooltip.vue";

const props = defineProps<{
  weatherData: DetailWeatherData,
  weatherDataDaily: HistoryWeatherData
}>()

const humidex = computed(() => showFixedValue(props.weatherData.humidex));
const heatIndex = computed(() => showFixedValue(props.weatherData.heatIndex));
const temperature = computed(() => showFixedValue(props.weatherData.temperature));
const relativePressure = computed(() => showFixedValue(props.weatherData.relativePressure));
const dewPoint = computed(() => showFixedValue(props.weatherData.dewPoint));
const windChill = computed(() => showFixedValue(props.weatherData.windChill));
const humidity = computed(() => showFixedValue(props.weatherData.humidity, 0));
const pm25 = computed(() => showFixedValue(props.weatherData.pm25, 0));
const lightningDaily = computed(() => showFixedValue(props.weatherData.lightningDaily, 0));

const windDirectionAvg = computed(() => showFixedValue(props.weatherData.windDirection, 0));
const windDirectionAvgDeg = computed(() => degToCompass(props.weatherData.windDirection));

const moon = computed(() => getMoonTimes(new Date(), props.weatherData.weatherStation.lat, props.weatherData.weatherStation.lng, false));
const sun = computed(() => getTimes(new Date(), props.weatherData.weatherStation.lat, props.weatherData.weatherStation.lng));
</script>
