<template>
  <div class="widget">
    <h3 class="widget-title">Données météo</h3>
    <ul class="arrow-list">
      <li>
        <router-link :to="{ name: ROUTES.CURRENT_WEATHER_DATA }">
          Données actuelles
        </router-link>
      </li>
      <li>
        <router-link :to="{ name: ROUTES.PERIOD_WEATHER_DATA, params: { period: AVAILABLE_PERIOD.DAILY }}">
          Données du jour
        </router-link>
      </li>
      <li>
        <router-link :to="{ name: ROUTES.PERIOD_WEATHER_DATA, params: { period: AVAILABLE_PERIOD.WEEKLY }}">
          Données de la semaine
        </router-link>
      </li>
      <li>
        <router-link :to="{ name: ROUTES.PERIOD_WEATHER_DATA, params: { period: AVAILABLE_PERIOD.MONTHLY }}">
          Données du mois
        </router-link>
      </li>
      <li>
        <router-link :to="{ name: ROUTES.PERIOD_WEATHER_DATA, params: { period: AVAILABLE_PERIOD.YEARLY }}">
          Données de l'année
        </router-link>
      </li>
      <li>
        <router-link :to="{ name: ROUTES.PERIOD_WEATHER_DATA, params: { period: AVAILABLE_PERIOD.RECORD }}">
          Records
        </router-link>
      </li>
    </ul>
  </div>
</template>

<script setup lang="ts">
import {AVAILABLE_PERIOD, ROUTES} from "@/common/constant.ts";
</script>
