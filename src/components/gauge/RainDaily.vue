<template>
  <canvas id="rainDaily" ref="canvasRef" />
</template>

<script setup lang="ts">
import { RainGauge } from '../../../public/js/raingauge.js';
import {onMounted, ref, watch} from "vue";

const props = defineProps<{
  value: number,
  unit: string
}>()

const canvasRef = ref<HTMLCanvasElement | null>(null);
const gRainDaily = ref<RainGauge | null>(null);

watch(() => props.value, () => {
  if (!gRainDaily.value) {
    return;
  }

  gRainDaily.value.setValue(props.value);
});

onMounted(() => {
  const canvas = canvasRef.value;

  gRainDaily.value = new RainGauge(canvas, {
    units: ` ${props.unit ?? 'mm'}`,
    minValue: 0,
    maxValue: 30,
    majorTicks: ['0', '5', '10', '15', '20', '25', '30'],
    highlights: [
      { from: 0, to: 5, color: '#D6ECF4' },
      { from: 5, to: 10, color: '#ADD9E9' },
      { from: 10, to: 15, color: '#85c6df' },
      { from: 15, to: 20, color: '#5cb3d4' },
      { from: 20, to: 25, color: '#33a0c9' },
      { from: 25, to: 30, color: '#0d7499' },
    ],
  });

  gRainDaily.value.setValue(props.value);

  gRainDaily.value.draw();
});
</script>
