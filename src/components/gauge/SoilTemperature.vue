<template>
  <canvas id="soil" ref="canvasRef" />
</template>

<script setup lang="ts">
import { Thermometer } from '../../../public/js/thermometer.js';
import {onMounted, ref, watch} from "vue";

const props = defineProps<{
  value: number,
  unit: string
}>()

const canvasRef = ref<HTMLCanvasElement | null>(null);
const gSoil = ref<Thermometer | null>(null);

watch(() => props.value, () => {
  if (!gSoil.value) {
    return;
  }

  gSoil.value.setValue(props.value);
});

onMounted(() => {
  const canvas = canvasRef.value;

  gSoil.value = new Thermometer(canvas, {
    units: ` ${props.unit ?? '°C'}`,
    minValue: 0,
    maxValue: 25,
    majorTicks: ['0', '5', '10', '15', '20', '25'],
    colors: { majorTicks: '#FFFFFF' },
    strokeTicks: false,
    highlights: [
      { from: 0, to: 5, color: '#49afcd' },
      { from: 5, to: 10, color: '#7fc3dd' },
      { from: 10, to: 15, color: '#d2b9be' },
      { from: 15, to: 20, color: '#da7777' },
      { from: 20, to: 25, color: '#c83333' },
    ],
  });

  gSoil.value.setValue(props.value);

  gSoil.value.draw();
});
</script>
