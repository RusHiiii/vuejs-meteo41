<template>
  <canvas id="aqi" ref="canvasRef" />
</template>

<script setup lang="ts">
import { RadialGauge } from '../../../public/js/radialgauge.js';
import {onMounted, ref, watch} from "vue";

const props = defineProps<{
  value: number
}>()

const canvasRef = ref<HTMLCanvasElement | null>(null);
const gAqi = ref<RadialGauge | null>(null);

watch(() => props.value, () => {
  if (!gAqi.value) {
    return;
  }

  gAqi.value.setValue(props.value);
});

onMounted(() => {
  const canvas = canvasRef.value;

  gAqi.value = new RadialGauge(canvas, {
    valueFormat: { dec: 0 },
    minValue: 0,
    maxValue: 300,
    majorTicks: ['0', '50', '100', '150', '200', '250', '300+'],
    colors: { majorTicks: '#FFFFFF' },
    strokeTicks: false,
    highlights: [
      { from: 0, to: 50, color: '#20A120' },
      { from: 50, to: 100, color: '#AFCD0A' },
      { from: 100, to: 150, color: '#F9BA0D' },
      { from: 150, to: 200, color: '#FD6828' },
      { from: 200, to: 250, color: '#BB0000' },
      { from: 250, to: 300, color: '#853085' },
    ],
  });

  gAqi.value.setValue(props.value);

  gAqi.value.draw();
});
</script>
