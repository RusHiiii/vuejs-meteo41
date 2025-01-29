<template>
  <select
    :class="props.class"
    :value="props.value"
    :name="props.name"
    @change="handleChange"
  >
    <option v-for="weatherStation in weatherStations.weatherStations" :value="weatherStation.reference">
      {{weatherStation.city}} ({{weatherStation.postalCode}})
    </option>
  </select>
</template>

<script setup lang="ts">

import {useQuery} from "@tanstack/vue-query";
import {fetchWeatherStations} from "@/common/api/weatherStationApi.ts";
import {useWeatherStationStore} from "@/stores/weatherStation.ts";

const props = defineProps<{
  class: string | null,
  value: string | null,
  name: string | null
}>();

const {state, switchWeatherStationReference} = useWeatherStationStore();

const {data: weatherStations} = useQuery({
  queryKey: ['main_weather_stations'],
  queryFn: () => fetchWeatherStations(),
  initialData: []
})

function handleChange(evt: Event) {
  const target = evt.target as HTMLSelectElement;

  switchWeatherStationReference(target.value);
}

</script>
