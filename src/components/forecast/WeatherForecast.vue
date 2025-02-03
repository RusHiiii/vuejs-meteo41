<template>
  <div class="hero" data-bg-image="/images/sologne-v1.png">
    <div class="container">
      <form class="find-location" @submit.prevent="onSubmit">
        <input
            type="text"
            name="text"
            placeholder="Rechercher..."
            v-model="currentCity"
        />
        <input class="no-margin-top" type="submit" value="Valider" />
      </form>
      <p v-if="search.hasGeocodeLocation === false" class="primary-alert margin-top-10">Impossible de trouver la météo correspondante à votre recherche :(</p>
    </div>
  </div>
  <div class="forecast-table">
    <div class="container">
      <ForecastObservation :forecast="forecast" :location="geocode?.results[0]?.formatted_address" />
    </div>
  </div>
</template>

<script setup lang="ts">

import {computed, reactive, ref} from "vue";
import {DEFAULT_WEATHER_STATION} from "@/core/constant.ts";
import {useGeocoding} from "@/hooks/geocodingHook.ts";
import {useForecast} from "@/hooks/forecastHook.ts";
import ForecastObservation from "@/components/forecast/ForecastObservation.vue";

const currentCity = ref<string>(DEFAULT_WEATHER_STATION.CITY_TEXT);

const search = reactive({
  searchLocation: DEFAULT_WEATHER_STATION.CITY_TEXT,
  hasGeocodeLocation: null
});

const geocodeSearchFilter = computed(() => ({
    address: search.searchLocation
}));

const {data: geocode} = useGeocoding(geocodeSearchFilter);

const forecastSearchFilter = computed(() => {
  if (geocode.value?.results?.length) {
    return {
      lat: geocode.value.results[0].geometry.location.lat,
      lng: geocode.value.results[0].geometry.location.lng
    }
  }

  return null;
});

const {data: forecast} = useForecast(forecastSearchFilter);

function onSubmit() {
  search.searchLocation = currentCity.value;
}
</script>
