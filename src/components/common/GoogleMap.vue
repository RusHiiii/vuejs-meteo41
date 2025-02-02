<template>
  <GoogleMap
      :api-key="apiKey"
      :zoom="12"
      :center="{lat, lng}"
      :disable-default-ui="true"
      gesture-handling="none"
      :zoom-control="false"
      :styles="[
          { featureType: 'poi', stylers: [{ visibility: 'off' }] },
      ]"
  >
    <CustomMarker :options="{ position: {lat, lng}} ">
      <div class="map-marker"  />
    </CustomMarker>
  </GoogleMap>
</template>

<script setup lang="ts">
import { GoogleMap, CustomMarker } from 'vue3-google-map'

const apiKey: string = import.meta.env.VITE_GOOGLE_MAPS_API_KEY;

const props = defineProps<{
  lat: number;
  lng: number;
}>();
</script>