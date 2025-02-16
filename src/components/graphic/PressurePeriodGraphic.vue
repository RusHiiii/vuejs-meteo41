<template>
  <apexchart
      v-if="chartDatas"
      ref="target"
      type="line"
      height="350"
      :options="chartOptions"
      :series="chartDatas"
  />
</template>

<script setup lang="ts">
import type {HistoryWeatherData, HistoryWeatherGraphSearchResult} from "@/core/types/WeatherData.tsx";
import {computed, shallowRef, useTemplateRef} from "vue";
import {
  getDefaultAnnotationsOptions,
  getDefaultChartOptions,
  getDefaultTooltipOptions
} from "@/core/utils/graphic/defaultGraphOptions.ts";
import {ChartType} from "@/core/types/PeriodGraphic.tsx";
import {useIntersectionObserver} from "@vueuse/core";

const props = defineProps<{
  graphData: HistoryWeatherGraphSearchResult | undefined,
  pressureValues: number[] | undefined,
  history: HistoryWeatherData | undefined,
  period: string | undefined,
}>();

const target = useTemplateRef<HTMLDivElement>('target');
const isVisible = shallowRef(false);

const { isActive } = useIntersectionObserver(
    target,
    ([entry]) => {
      isVisible.value = entry?.isIntersecting || false
    }
)

const chartDatas = computed(() => {
  if (!props.pressureValues || !isVisible.value) return [];

  return [{
    name: 'Pression',
    data: props.pressureValues
  }];
});

const chartOptions = computed(() => ({
  ...getDefaultChartOptions(ChartType.Pressure, props.graphData?.dateBegin, props.graphData?.dateEnd),
  ...getDefaultTooltipOptions(props.graphData?.unit?.pressureUnit),
  ...getDefaultAnnotationsOptions(props.history?.minRelativePressureReceivedAt, props.history?.maxRelativePressureReceivedAt, props.history?.minRelativePressure, props.history?.maxRelativePressure)
}));
</script>
