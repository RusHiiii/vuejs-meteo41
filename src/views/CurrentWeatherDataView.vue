<template>
  <BreadCrumb
    :url="ROUTES.CURRENT_WEATHER_DATA"
    text="Donnée courrante"
    page="Données"
  />

  <div class="fullwidth-block no-padding-top">
    <div class="container">
      <div class="row">
        <div class="fullwidth-block padding-content">
          <div class="content col-md-8">
            <div class="post single">
              <h2 class="entry-title">
                Données de la station en temps réel
              </h2>
              <div class="featured-image">
                <img
                  src="/static/images/chenonceau.png"
                  alt="Chenonceau"
                />
              </div>

              <div class="entry-content min-height-entry">

              </div>
            </div>
          </div>
        </div>

        <WeatherDataSummary />

        <div class="sidebar col-md-3 col-md-offset-1">
          <WeatherDataAccess />
        </div>
      </div>
    </div>
  </div>
</template>
<script setup lang="ts">
import {ROUTES} from "@/common/constant.ts";
import BreadCrumb from "@/components/common/BreadCrumb.vue";
import WeatherDataAccess from "@/components/common/weatherData/WeatherDataAccess.vue";
import WeatherDataSummary from "@/components/common/weatherData/WeatherDataSummary.vue";
import {fetchWeatherStations} from "@/common/api/weatherStationApi.ts";
import {useQuery} from "@tanstack/vue-query";
import {fetchSummaryWeatherData} from "@/common/api/weatherDataApi.ts";

</script>
