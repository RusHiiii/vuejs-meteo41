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
              <RouterLink :to="{ name: ROUTES.PERIOD_WEATHER_DATA, params: { period: AVAILABLE_PERIOD.DAILY }}">
                Les données de la journée
              </RouterLink>
            </li>
            <li>
              <RouterLink :to="{ name: ROUTES.PERIOD_WEATHER_DATA, params: { period: AVAILABLE_PERIOD.WEEKLY }}">
                Les données de la semaine
              </RouterLink>
            </li>
            <li>
              <RouterLink :to="{ name: ROUTES.PERIOD_WEATHER_DATA, params: { period: AVAILABLE_PERIOD.MONTHLY }}">
                Les données du mois
              </RouterLink>
            </li>
            <li>
              <RouterLink :to="{ name: ROUTES.PERIOD_WEATHER_DATA, params: { period: AVAILABLE_PERIOD.YEARLY }}">
                Les données de l'année
              </RouterLink>
            </li>
            <li>
              <RouterLink :to="{ name: ROUTES.PERIOD_WEATHER_DATA, params: { period: AVAILABLE_PERIOD.RECORD }}">
                Les records de la station
              </RouterLink>
            </li>
            <li>
              <RouterLink :to="{ name: ROUTES.CURRENT_WEATHER_DATA }">
                Les graphiques de la station
              </RouterLink>
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
                src="/images/weathercloud.png"
                alt="weathercloud"
              />
            </a>
            <a
              target="_blank"
              href="https://www.wunderground.com/dashboard/pws/ISAINT1035"
            >
              <img src="/images/wu.png" alt="wunderground" />
            </a>
            <a target="_blank" href="https://www.ecowitt.net/">
              <img src="/images/ecowitt.png" alt="ecowitt" />
            </a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import {AVAILABLE_PERIOD, ROUTES} from "@/core/constant.ts";
import {useCurrentWeatherStationReference} from "@/stores/weatherStation.ts";
import {useWeatherStation} from "@/hooks/weatherStationHook.ts";

const weatherStationReference = useCurrentWeatherStationReference();

const {data: weatherStation} = useWeatherStation(weatherStationReference);
</script>
