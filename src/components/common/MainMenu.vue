<template>
  <div class="site-header">
    <div class="container">
      <div class="branding">
        <router-link :to="{ name: ROUTES.HOME }">
          <img src="/static/images/logo.png" alt="" class="logo" />
        </router-link>
        <div class="logo-type">
          <small class="site-description">Changez de station ↓</small>
          <WeatherStationSelect
            name="weather-station-select"
            class="site-title select-weatherstation"
            :value="weatherStationReference"
            />
        </div>
      </div>

      <div class="main-navigation">
        <button type="button" class="menu-toggle">
          <i class="fa fa-bars" />
        </button>
      </div>

      <div id="custom-menu" class="main-navigation main-navigation-menu">
        <ul class="menu">
          <li
            :class="['menu-item', route.name === ROUTES.HOME ? 'current-menu-item' : '']"
          >
            <router-link :to="{ name: ROUTES.HOME }">
              Accueil
            </router-link>
          </li>
          <li
            :class="['menu-item', [ROUTES.CURRENT_WEATHER_DATA, ROUTES.PERIOD_WEATHER_DATA].includes(route.name as string) ? 'current-menu-item' : '']"
          >
            <router-link :to="{ name: ROUTES.CURRENT_WEATHER_DATA }">
              Données
            </router-link>
          </li>
          <li
            :class="['menu-item', route.name === ROUTES.PERIOD_GRAPHIC ? 'current-menu-item' : '']"
          >
            <router-link :to="{ name: ROUTES.PERIOD_GRAPHIC }">
              Graphiques
            </router-link>
          </li>
          <li
            :class="['menu-item', route.name === ROUTES.ABOUT ? 'current-menu-item' : '']"
          >
            <router-link :to="{ name: ROUTES.ABOUT }">
              À propos
            </router-link>
          </li>
          <li
            :class="['menu-item', route.name === ROUTES.CONTACT ? 'current-menu-item' : '']"
          >
            <router-link :to="{ name: ROUTES.CONTACT }">
              Contact
            </router-link>
          </li>
        </ul>
      </div>

      <div class="mobile-navigation" />
    </div>
  </div>
</template>

<script setup lang="ts">
import {ROUTES} from "@/core/constant.ts";
import {useRoute} from "vue-router";
import WeatherStationSelect from "@/components/common/form/select/WeatherStationSelect.vue";
import {useWeatherStationStore} from "@/stores/weatherStation.ts";

const route = useRoute();
const {weatherStationReference} = useWeatherStationStore();
</script>
