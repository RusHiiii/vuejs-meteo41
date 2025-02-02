<template>
  <main class="main-content">
    <div class="hero" data-bg-image="/static/images/sologne-v1.png">
      <div class="container">

      </div>
    </div>
    <div class="forecast-table">
      <div class="container">

      </div>
    </div>
    <main class="main-content current-obs">
      <div class="fullwidth-block">
        <div class="container">
          <div class="forecast-home col-md-7 col-xs-12">
            <div class="forecast-table">
              <div class="forecast-container">
                <div class="today forecast">
                  <Observation
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
          <div class="gauge col-md-3 col-sm-6">

            <h3>Averse</h3>
          </div>
          <div class="gauge col-md-3 col-sm-6">

            <h3>Précipitation (jour)</h3>
          </div>
          <div class="gauge col-md-3 col-sm-6">

            <h3>Précipitation (mois)</h3>
          </div>
          <div class="gauge col-md-3 col-sm-6">

            <h3>Précipitation (année)</h3>
          </div>
        </div>
      </div>

      <div class="fullwidth-block">
        <div class="container">
          <h2 class="section-title">Anémomètre</h2>
          <div class="gauge col-md-3 col-sm-6">

            <h3>Vent (moy/10 min)</h3>
          </div>
          <div class="gauge col-md-3 col-sm-6">

            <h3>Direction (moy/10 min)</h3>
          </div>
          <div class="gauge col-md-3 col-sm-6">

            <h3>Vent (rafale)</h3>
          </div>
          <div class="gauge col-md-3 col-sm-6">

            <h3>Vent (rafale max)</h3>
          </div>
        </div>
      </div>
    </main>
  </main>
</template>
<script setup lang="ts">

import {useCurrentWeatherStationReference} from "@/stores/weatherStation.ts";
import {useWeatherStation} from "@/hooks/weatherStationHook.ts";
import {useDetailWeatherData, useWeatherDataHistory} from "@/hooks/weatherDataHook.ts";
import {ref} from "vue";
import {AVAILABLE_PERIOD} from "@/core/constant.ts";
import GoogleMap from "@/components/common/GoogleMap.vue";
import Observation from "@/components/weatherData/Observation.vue";

const historyPeriod = ref(AVAILABLE_PERIOD.DAILY);

const weatherStationReference = useCurrentWeatherStationReference();

const {data: weatherStation} = useWeatherStation(weatherStationReference);

const {data: weatherDataDetail} = useDetailWeatherData(weatherStationReference);
const {data: weatherDataHistory} = useWeatherDataHistory(weatherStationReference, historyPeriod);

</script>
