<template>
  <select
    :class="props.class"
    :value="props.value"
    :name="props.name"
    @change="handleChange"
  >
    <option :key="weatherStation.id" v-for="weatherStation in weatherStations.weatherStations" :value="weatherStation.reference">
      {{weatherStation.city}} ({{weatherStation.postalCode.substring(0, 2)}})
    </option>
  </select>
</template>

<script setup lang="ts">

import {useQuery} from "@tanstack/vue-query";
import {fetchWeatherStations} from "@/core/api/weatherStationApi.ts";
import {useWeatherStationStore} from "@/stores/weatherStation.ts";

const props = defineProps<{
  class: string | null,
  value: string | null,
  name: string | null
}>();

const weatherStationStore = useWeatherStationStore();

const {data: weatherStations} = useQuery({
  queryKey: ['main_weather_stations'],
  queryFn: () => fetchWeatherStations(),
  initialData: []
})

function handleChange(evt: Event) {
  const target = evt.target as HTMLSelectElement;

  weatherStationStore.switchWeatherStationReference(target.value);
}

</script>
