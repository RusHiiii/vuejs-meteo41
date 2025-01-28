<template>
  <div class="site-header">
    <div class="container">
      <div class="branding">
        <router-link :to="{ name: 'home' }">
          <img src="/static/images/logo.png" alt="" class="logo" />
        </router-link>
        <div class="logo-type">
          <small class="site-description">Changez de station ↓</small>
          <WeatherStationSelect
            name="weather-station-select"
            class="site-title select-weatherstation"
            :value="state.weatherStationReference"
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
            v-for="item in menuItems"
            :key="item.name"
            :class="['menu-item', route.name === item.name ? 'current-menu-item' : '']"
          >
            <router-link :to="{ name: item.name }">
              {{ item.label }}
            </router-link>
          </li>
        </ul>
      </div>

      <div class="mobile-navigation" />
    </div>
  </div>
</template>

<script setup lang="ts">
import {ROUTES} from "@/common/constant.ts";
import {useRoute} from "vue-router";
import WeatherStationSelect from "@/components/common/form/select/WeatherStationSelect.vue";
import {useWeatherStation} from "@/stores/weatherStation.ts";

const route = useRoute();
const {state} = useWeatherStation();

const menuItems = [
  { name: ROUTES.HOME, label: "Accueil" },
  { name: ROUTES.CURRENT_WEATHER_DATA, label: "Données" },
  { name: ROUTES.PERIOD_GRAPHIC, label: "Graphiques" },
  { name: ROUTES.ABOUT, label: "À propos" },
  { name: ROUTES.CONTACT, label: "Contact" },
];

</script>
