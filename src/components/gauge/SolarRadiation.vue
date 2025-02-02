<template>
  <canvas id="solarRadiation" ref="canvasRef" />
</template>

<script setup lang="ts">
import { RadialGauge } from '../../../public/js/radialgauge.js';
import {onMounted, ref, watch} from "vue";

const props = defineProps<{
  value: number,
  unit: string
}>()

const canvasRef = ref<HTMLCanvasElement | null>(null);
const gSolarRadiation = ref<RadialGauge | null>(null);

watch(() => props.value, () => {
  if (!gSolarRadiation.value) {
    return;
  }

  gSolarRadiation.value.setValue(props.value);
});

onMounted(() => {
  const canvas = canvasRef.value;

  gSolarRadiation.value = new RadialGauge(canvas, {
    units: ` ${props.unit ?? 'W/m²'}`,
    minValue: 0,
    maxValue: 1500,
    majorTicks: ['0', '300', '600', '900', '1200', '1500'],
    colors: { majorTicks: '#FFFFFF' },
    strokeTicks: false,
    highlights: [
      { from: 0, to: 300, color: '#f7e34a' },
      { from: 300, to: 600, color: '#edbe3e' },
      { from: 600, to: 900, color: '#e39a32' },
      { from: 900, to: 1200, color: '#da7526' },
      { from: 1200, to: 1500, color: '#d0511a' },
    ],
  });

  gSolarRadiation.value.setValue(props.value);

  gSolarRadiation.value.draw();
});
</script>
