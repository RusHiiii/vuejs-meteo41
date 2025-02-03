<template>
  <main class="main-content">

    <WeatherForecast />

    <main class="main-content current-obs">
      <div class="fullwidth-block">
        <div class="container">
          <div class="forecast-home col-md-7 col-xs-12">
            <div class="forecast-table">
              <div class="forecast-container">
                <div class="today forecast">
                  <CurrentObservation
                      v-if="weatherDataDetail && weatherDataHistory"
                      :weatherData="weatherDataDetail"
                      :weatherDataDaily="weatherDataHistory"
                  />
                  <p v-else class="loading">
                    Aucune données actuellement
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div class="home-map col-md-5 col-xs-12">
            <div v-if="weatherDataDetail" class="contact-details map-home">
              <GoogleMap
                  :lat="weatherDataDetail.weatherStation.lat"
                  :lng="weatherDataDetail.weatherStation.lng"
              />
            </div>
          </div>
        </div>
      </div>

      <div class="fullwidth-block">
        <div class="container">
          <h2 class="section-title">Pluviomètre</h2>
          <div class="gauge col-md-3 col-sm-6" v-if="weatherDataDetail?.rainRate >= 0">
            <RainRate
                :value="weatherDataDetail.rainRate"
                :unit="weatherDataDetail.unit.rainUnit"
            />
            <h3>Averse</h3>
          </div>
          <div class="gauge col-md-3 col-sm-6" v-if="weatherDataDetail?.rainDaily >= 0">
            <RainDaily
                :value="weatherDataDetail.rainDaily"
                :unit="weatherDataDetail.unit.rainUnit"
            />
            <h3>Précipitation (jour)</h3>
          </div>
          <div class="gauge col-md-3 col-sm-6" v-if="weatherDataDetail?.rainMonthly >= 0">
            <RainMonthly
                :value="weatherDataDetail.rainMonthly"
                :unit="weatherDataDetail.unit.rainUnit"
            />
            <h3>Précipitation (mois)</h3>
          </div>
          <div class="gauge col-md-3 col-sm-6" v-if="weatherDataDetail?.rainYearly >= 0">
            <RainYearly
                :value="weatherDataDetail.rainYearly"
                :unit="weatherDataDetail.unit.rainUnit"
            />
            <h3>Précipitation (année)</h3>
          </div>
        </div>
      </div>

      <div class="fullwidth-block">
        <div class="container">
          <h2 class="section-title">Anémomètre</h2>
          <div class="gauge col-md-3 col-sm-6" v-if="weatherDataDetail?.windSpeedAvg >= 0">
            <WindSpeed
                :value="weatherDataDetail.windSpeedAvg"
                :unit="weatherDataDetail.unit.speedUnit"
            />
            <h3>Vent (moy/10 min)</h3>
          </div>
          <div class="gauge col-md-3 col-sm-6" v-if="weatherDataDetail?.windDirectionAvg >= 0">
            <WindDirection
                :value="weatherDataDetail.windDirectionAvg"
            />
            <h3>Direction (moy/10 min)</h3>
          </div>
          <div class="gauge col-md-3 col-sm-6" v-if="weatherDataDetail?.windGust >= 0">
            <WindGust
                :value="weatherDataDetail.windGust"
                :unit="weatherDataDetail.unit.speedUnit"
            />
            <h3>Vent (rafale)</h3>
          </div>
          <div class="gauge col-md-3 col-sm-6" v-if="weatherDataDetail?.windMaxDailyGust >= 0">
            <WindMaxGust
                :value="weatherDataDetail.windMaxDailyGust"
                :unit="weatherDataDetail.unit.speedUnit"
            />
            <h3>Vent (rafale max)</h3>
          </div>
        </div>
      </div>

      <div class="fullwidth-block">
        <div class="container">
          <h2 class="section-title">Capteurs au sol</h2>
          <div class="gauge col-md-3 col-sm-6" v-if="weatherDataDetail?.aqi && weatherDataDetail?.aqi >= 0">
            <AirQualityIndex
                :value="weatherDataDetail.aqi"
            />
            <h3>Qualité de l'air</h3>
          </div>
          <div class="gauge col-md-3 col-sm-6" v-if="weatherDataDetail?.leafWetness >= 0">
            <LeafWetness
                :value="weatherDataDetail.leafWetness"
                :unit="weatherDataDetail.unit.humidityUnit"
            />
            <h3>Humidité foliaire</h3>
          </div>
          <div class="gauge col-md-3 col-sm-6" v-if="weatherDataDetail?.soilTemperature >= 0">
            <SoilTemperature
                :value="weatherDataDetail.soilTemperature"
                :unit="weatherDataDetail.unit.temperatureUnit"
            />
            <h3>Température (-30cm)</h3>
          </div>
        </div>
      </div>

      <div class="fullwidth-block other-sensor">
        <div class="container">
          <h2 class="section-title">Capteurs solaires</h2>
          <div class="gauge col-md-3 col-sm-6" v-if="weatherDataDetail?.uv >= 0">
            <Uv
                :value="weatherDataDetail.uv"
            />
            <h3>UV</h3>
          </div>
          <div class="gauge col-md-3 col-sm-6"  v-if="weatherDataDetail?.solarRadiation >= 0">
            <SolarRadiation
                :value="weatherDataDetail.solarRadiation"
                :unit="weatherDataDetail.unit.solarRadiationUnit"
            />
            <h3>Radiation solaire</h3>
          </div>
        </div>
      </div>
    </main>
  </main>
</template>
<script setup lang="ts">

import {useCurrentWeatherStationReference} from "@/stores/weatherStation.ts";
import {useDetailWeatherData, useWeatherDataHistory} from "@/hooks/weatherDataHook.ts";
import {ref} from "vue";
import {AVAILABLE_PERIOD} from "@/core/constant.ts";
import GoogleMap from "@/components/common/GoogleMap.vue";
import CurrentObservation from "@/components/weatherData/CurrentObservation.vue";
import RainRate from "@/components/gauge/RainRate.vue";
import RainDaily from "@/components/gauge/RainDaily.vue";
import RainMonthly from "@/components/gauge/RainMonthly.vue";
import RainYearly from "@/components/gauge/RainYearly.vue";
import WindSpeed from "@/components/gauge/WindSpeed.vue";
import WindDirection from "@/components/gauge/WindDirection.vue";
import WindGust from "@/components/gauge/WindGust.vue";
import WindMaxGust from "@/components/gauge/WindMaxGust.vue";
import AirQualityIndex from "@/components/gauge/AirQualityIndex.vue";
import LeafWetness from "@/components/gauge/LeafWetness.vue";
import SoilTemperature from "@/components/gauge/SoilTemperature.vue";
import Uv from "@/components/gauge/Uv.vue";
import SolarRadiation from "@/components/gauge/SolarRadiation.vue";
import WeatherForecast from "@/components/forecast/WeatherForecast.vue";

const historyPeriod = ref(AVAILABLE_PERIOD.DAILY);

const weatherStationReference = useCurrentWeatherStationReference();

const {data: weatherDataDetail} = useDetailWeatherData(weatherStationReference);
const {data: weatherDataHistory} = useWeatherDataHistory(weatherStationReference, historyPeriod);

</script>
