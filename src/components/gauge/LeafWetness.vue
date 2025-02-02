<template>
  <canvas id="leafWetness" ref="canvasRef" />
</template>

<script setup lang="ts">
import { RadialGauge } from '../../../public/js/radialgauge.js';
import {onMounted, ref, watch} from "vue";

const props = defineProps<{
  value: number,
  unit: string
}>()

const canvasRef = ref<HTMLCanvasElement | null>(null);
const gLeaf = ref<RadialGauge | null>(null);

watch(() => props.value, () => {
  if (!gLeaf.value) {
    return;
  }

  gLeaf.value.setValue(props.value);
});

onMounted(() => {
  const canvas = canvasRef.value;

  gLeaf.value = new RadialGauge(canvas, {
    units: ` ${props.unit ?? '%'}`,
    valueFormat: { dec: 0 },
    minValue: 0,
    maxValue: 100,
    majorTicks: ['0', '20', '40', '60', '80', '100'],
    colors: { majorTicks: '#FFFFFF' },
    strokeTicks: false,
    highlights: [
      { from: 0, to: 20, color: '#e4e4eb' },
      { from: 20, to: 40, color: '#c1c1d0' },
      { from: 40, to: 60, color: '#a1a1b8' },
      { from: 60, to: 80, color: '#8484a1' },
      { from: 80, to: 100, color: '#68688b' },
    ],
  });

  gLeaf.value.setValue(props.value);

  gLeaf.value.draw();
});
</script>
