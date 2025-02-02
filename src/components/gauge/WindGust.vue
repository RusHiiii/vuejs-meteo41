<template>
  <canvas id="windGust" ref="canvasRef" />
</template>

<script setup lang="ts">
import { RadialGauge } from '../../../public/js/radialgauge.js';
import {onMounted, ref, watch} from "vue";

const props = defineProps<{
  value: number,
  unit: string
}>()

const canvasRef = ref<HTMLCanvasElement | null>(null);
const gWindGust = ref<RadialGauge | null>(null);

watch(() => props.value, () => {
  if (!gWindGust.value) {
    return;
  }

  gWindGust.value.setValue(props.value);
});

onMounted(() => {
  const canvas = canvasRef.value;

  gWindGust.value = new RadialGauge(canvas, {
    units: ` ${props.unit ?? 'km/h'}`,
    minValue: 0,
    maxValue: 60,
    majorTicks: ['0', '10', '20', '30', '40', '50', '60'],
    colors: { majorTicks: '#FFFFFF' },
    strokeTicks: false,
    highlights: [
      { from: 0, to: 10, color: '#D6ECF4' },
      { from: 10, to: 20, color: '#ADD9E9' },
      { from: 20, to: 30, color: '#85c6df' },
      { from: 30, to: 40, color: '#5cb3d4' },
      { from: 40, to: 50, color: '#33a0c9' },
      { from: 50, to: 60, color: '#0d7499' },
    ],
  });

  gWindGust.value.setValue(props.value);

  gWindGust.value.draw();
});
</script>
