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
  historyGraph: HistoryWeatherGraphSearchResult | undefined,
  history: HistoryWeatherData | undefined,
  solarRadiationValues: number[] | undefined
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
  if (!props.solarRadiationValues?.length || !isVisible.value) {
    return previous ?? [];
  }

  return [{
    name: 'Radiation solaire',
    data: props.solarRadiationValues
  }];
});

const chartOptions = computed((previous) => {
  if (!props.solarRadiationValues?.length || !isVisible.value) {
    return previous ?? [];
  }

  return {
    ...getDefaultChartOptions(ChartType.SolarRadiation, props.historyGraph?.dateBegin, props.historyGraph?.dateEnd),
    ...getDefaultTooltipOptions(props.historyGraph?.unit?.solarRadiationUnit),
    ...getDefaultAnnotationsOptions(undefined, props.history?.maxSolarRadiationReceivedAt, undefined, props.history?.maxSolarRadiation)
  }
});
</script>
