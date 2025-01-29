<template>
  <div class="fullwidth-block information">
    <div class="container">
      <div class="row">
        <div class="col-md-4">
          <h2 class="section-title">Informations</h2>
          <ul class="arrow-feature">
            <li>
              <h3>La station météo</h3>
              <p>{{weatherStation?.shortDescription}}</p>
            </li>
            <li>
              <h3>Utilisation des données</h3>
              <p>
                Les données météo du site ne peuvent en aucun cas servir pour
                la protection des biens et des personnes.
              </p>
            </li>
            <li>
              <h3>Développeur Web</h3>
              <p>Florent Damiens, Royat, 63130</p>
            </li>
          </ul>
        </div>
        <div class="col-md-4">
          <h2 class="section-title weather-data">Les données météo</h2>
          <ul class="arrow-list">
            <li>
              <router-link :to="{ name: ROUTES.CURRENT_WEATHER_DATA }">
                Les données de la journée
              </router-link>
            </li>
            <li>
              <router-link :to="{ name: ROUTES.CURRENT_WEATHER_DATA }">
                Les données de la semaine
              </router-link>
            </li>
            <li>
              <router-link :to="{ name: ROUTES.CURRENT_WEATHER_DATA }">
                Les données du mois
              </router-link>
            </li>
            <li>
              <router-link :to="{ name: ROUTES.CURRENT_WEATHER_DATA }">
                Les données de l'année
              </router-link>
            </li>
            <li>
              <router-link :to="{ name: ROUTES.CURRENT_WEATHER_DATA }">
                Les records de la station
              </router-link>
            </li>
            <li>
              <router-link :to="{ name: ROUTES.CURRENT_WEATHER_DATA }">
                Les graphiques de la station
              </router-link>
            </li>
          </ul>
        </div>
        <div class="col-md-4">
          <h2 class="section-title my-network">Mes autres réseaux</h2>
          <div class="photo-grid">
            <a
              target="_blank"
              href="https://app.weathercloud.net/d0599727380#profile"
            >
              <img
                src="/static/images/weathercloud.png"
                alt="weathercloud"
              />
            </a>
            <a
              target="_blank"
              href="https://www.wunderground.com/dashboard/pws/ISAINT1035"
            >
              <img src="/static/images/wu.png" alt="wunderground" />
            </a>
            <a target="_blank" href="https://www.ecowitt.net/">
              <img src="/static/images/ecowitt.png" alt="ecowitt" />
            </a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import {ROUTES} from "@/common/constant.ts";
import {
  fetchWeatherStation
} from "@/common/api/weatherStationApi.ts";
import {useWeatherStationReference} from "@/stores/weatherStation.ts";
import {useQuery} from "@tanstack/vue-query";

const weatherStationReference = useWeatherStationReference();

const {data: weatherStation} = useQuery({
  queryKey: ['weather_station', {reference: weatherStationReference}],
  queryFn: () => fetchWeatherStation(weatherStationReference.value)
});
</script>
