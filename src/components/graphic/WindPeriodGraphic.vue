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
import {computed, shallowRef, useTemplateRef, watch} from "vue";
import {
  getDefaultAnnotationsOptions,
  getDefaultChartOptions,
  getDefaultTooltipOptions
} from "@/core/utils/graphic/defaultGraphOptions.ts";
import {ChartType} from "@/core/types/PeriodGraphic.tsx";
import {useIntersectionObserver} from "@vueuse/core";

const props = defineProps<{
  historyGraph: HistoryWeatherGraphSearchResult | undefined,
  history: HistoryWeatherData | undefined,
  windSpeedValues: number[] | undefined,
  windGustValues: number[] | undefined
}>();

const target = useTemplateRef<HTMLDivElement>('target');
const isVisible = shallowRef(false);

const { isActive } = useIntersectionObserver(
    target,
    ([entry]) => {
      isVisible.value = entry?.isIntersecting || false
    }
)

const chartDatas = computed((previous) => {
  if (!props.windSpeedValues || !props.windGustValues || !isVisible.value) {
    return previous ?? [];
  }

  return [
    {
      name: 'Vitesse du vent',
      data: props.windSpeedValues,
      type: 'line',
    },
    {
      name: 'Rafale',
      data: props.windGustValues,
      type: 'area',
    }
  ]
});

const chartOptions = computed(() => ({
  ...getDefaultChartOptions(ChartType.Wind, props.historyGraph?.dateBegin, props.historyGraph?.dateEnd),
  ...getDefaultTooltipOptions(props.historyGraph?.unit?.speedUnit),
  ...getDefaultAnnotationsOptions(undefined, props.history?.maxWindGustReceivedAt, undefined, props.history?.maxWindGust)
}));
</script>
