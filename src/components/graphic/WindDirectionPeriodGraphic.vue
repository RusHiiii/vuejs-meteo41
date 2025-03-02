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
  windDirectionValues: number[] | undefined
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
  if (!props.windDirectionValues || !isVisible.value) {
    return previous ?? [];
  }

  return [
    {
      name: 'Direction du vent',
      data: props.windDirectionValues,
      type: 'scatter',
    }
  ]
});

const chartOptions = computed(() => ({
  ...getDefaultChartOptions(ChartType.WindDirection, props.historyGraph?.dateBegin, props.historyGraph?.dateEnd),
  ...getDefaultTooltipOptions(props.historyGraph?.unit?.windDirUnit)
}));
</script>
