<template>
  <canvas id="rainRate" ref="canvasRef" />
</template>

<script setup lang="ts">
import { RadialGauge } from '../../../public/js/radialgauge.js';
import {onMounted, ref, watch} from "vue";

const props = defineProps<{
  value: number,
  unit: string
}>()

const canvasRef = ref<HTMLCanvasElement | null>(null);
const gRainRate = ref<RadialGauge | null>(null);

watch(() => props.value, () => {
  if (!gRainRate.value) {
    return;
  }

  gRainRate.value.setValue(props.value);
});

onMounted(() => {
  const canvas = canvasRef.value;

  gRainRate.value = new RadialGauge(canvas, {
    units: ` ${props.unit ?? 'mm'}/h`,
    minValue: 0,
    maxValue: 60,
    colors: { majorTicks: '#FFFFFF' },
    strokeTicks: false,
    majorTicks: ['0', '10', '20', '30', '40', '50', '60'],
    highlights: [
      { from: 0, to: 10, color: '#D6ECF4' },
      { from: 10, to: 20, color: '#ADD9E9' },
      { from: 20, to: 30, color: '#85c6df' },
      { from: 30, to: 40, color: '#5cb3d4' },
      { from: 40, to: 50, color: '#33a0c9' },
      { from: 50, to: 60, color: '#0d7499' },
    ],
  });

  gRainRate.value.setValue(props.value);

  gRainRate.value.draw();
});
</script>
