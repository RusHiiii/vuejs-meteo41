<template>
  <canvas id="windDirection" ref="canvasRef" />
</template>

<script setup lang="ts">
import { RadialGauge } from '../../../public/js/radialgauge.js';
import {onMounted, ref, watch} from "vue";

const props = defineProps<{
  value: number
}>()

const canvasRef = ref<HTMLCanvasElement | null>(null);
const gWindDirection = ref<RadialGauge | null>(null);

watch(() => props.value, () => {
  if (!gWindDirection.value) {
    return;
  }

  gWindDirection.value.setValue(props.value);
});

onMounted(() => {
  const canvas = canvasRef.value;

  gWindDirection.value = new RadialGauge(canvas, {
    majorTicks: ['N', 'NE', 'E', 'SE', 'S', 'SW', 'W', 'NW'],
    dirGauge: true,
    minValue: 0,
    maxValue: 360,
    minorTicks: 0,
    colors: { majorTicks: '#FFFFFF' },
    strokeTicks: false,
    highlights: [
      { from: 0, to: 90, color: '#add9e9' },
      { from: 90, to: 180, color: '#add9e9' },
      { from: 180, to: 270, color: '#add9e9' },
      { from: 270, to: 360, color: '#add9e9' },
    ],
  });

  gWindDirection.value.setValue(props.value);

  gWindDirection.value.draw();
});
</script>
