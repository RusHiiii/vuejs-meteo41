<template>
  <canvas id="rainMonthly" ref="canvasRef" />
</template>

<script setup lang="ts">
import { RainGauge } from '../../../public/js/raingauge.js';
import {onMounted, ref, watch} from "vue";

const props = defineProps<{
  value: number,
  unit: string
}>()

const canvasRef = ref<HTMLCanvasElement | null>(null);
const gRainMonthly = ref<RainGauge | null>(null);

watch(() => props.value, () => {
  if (!gRainMonthly.value) {
    return;
  }

  gRainMonthly.value.setValue(props.value);
});

onMounted(() => {
  const canvas = canvasRef.value;

  gRainMonthly.value = new RainGauge(canvas, {
    units: ` ${props.unit ?? 'mm'}`,
    minValue: 0,
    maxValue: 90,
    majorTicks: ['0', '15', '30', '45', '60', '75', '90'],
    highlights: [
      { from: 0, to: 15, color: '#D6ECF4' },
      { from: 15, to: 30, color: '#ADD9E9' },
      { from: 30, to: 45, color: '#85c6df' },
      { from: 45, to: 60, color: '#5cb3d4' },
      { from: 60, to: 75, color: '#33a0c9' },
      { from: 75, to: 90, color: '#0d7499' },
    ],
  });

  gRainMonthly.value.setValue(props.value);

  gRainMonthly.value.draw();
});
</script>
