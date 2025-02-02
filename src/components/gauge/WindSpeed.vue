<template>
  <canvas id="windSpeed" ref="canvasRef" />
</template>

<script setup lang="ts">
import { RadialGauge } from '../../../public/js/radialgauge.js';
import {onMounted, ref, watch} from "vue";

const props = defineProps<{
  value: number,
  unit: string
}>()

const canvasRef = ref<HTMLCanvasElement | null>(null);
const gWindSpeed = ref<RadialGauge | null>(null);

watch(() => props.value, () => {
  if (!gWindSpeed.value) {
    return;
  }

  gWindSpeed.value.setValue(props.value);
});

onMounted(() => {
  const canvas = canvasRef.value;

  gWindSpeed.value = new RadialGauge(canvas, {
    units: ` ${props.unit ?? 'km/h'}`,
    minValue: 0,
    maxValue: 25,
    majorTicks: ['0', '5', '10', '15', '20', '25'],
    colors: { majorTicks: '#FFFFFF' },
    strokeTicks: false,
    highlights: [
      { from: 0, to: 5, color: '#D6ECF4' },
      { from: 5, to: 10, color: '#ADD9E9' },
      { from: 10, to: 15, color: '#85C6DF' },
      { from: 15, to: 20, color: '#5CB3D4' },
      { from: 20, to: 25, color: '#33A0C9' },
    ],
  });

  gWindSpeed.value.setValue(props.value);

  gWindSpeed.value.draw();
});
</script>
