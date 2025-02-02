<template>
  <canvas id="rainYearly" ref="canvasRef" />
</template>

<script setup lang="ts">
import { RainGauge } from '../../../public/js/raingauge.js';
import {onMounted, ref, watch} from "vue";

const props = defineProps<{
  value: number,
  unit: string
}>()

const canvasRef = ref<HTMLCanvasElement | null>(null);
const gRainYearly = ref<RainGauge | null>(null);

watch(() => props.value, () => {
  if (!gRainYearly.value) {
    return;
  }

  gRainYearly.value.setValue(props.value);
});

onMounted(() => {
  const canvas = canvasRef.value;

  gRainYearly.value = new RainGauge(canvas, {
    units: ` ${props.unit ?? 'mm'}`,
    minValue: 0,
    maxValue: 900,
    majorTicks: ['0', '150', '300', '450', '600', '750', '900'],
    highlights: [
      { from: 0, to: 150, color: '#D6ECF4' },
      { from: 150, to: 300, color: '#ADD9E9' },
      { from: 300, to: 450, color: '#85c6df' },
      { from: 450, to: 600, color: '#5cb3d4' },
      { from: 600, to: 750, color: '#33a0c9' },
      { from: 750, to: 900, color: '#0d7499' },
    ],
  });

  gRainYearly.value.setValue(props.value);

  gRainYearly.value.draw();
});
</script>
