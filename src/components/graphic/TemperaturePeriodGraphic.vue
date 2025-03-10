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
  temperatureValues: number[] | undefined,
  dewpointValues: number[] | undefined,
  windChillValues: number[] | undefined
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
  if (!props.temperatureValues?.length || !props.windChillValues?.length || !props.dewpointValues?.length || !isVisible.value) {
    return previous ?? [];
  }

  return [
    {
      name: 'Température',
      data: props.temperatureValues
    },
    {
      name: 'Température ressentie',
      data: props.windChillValues
    },
    {
      name: 'Point de rosée',
      data: props.dewpointValues
    }
]});

const chartOptions = computed((previous) => {
  if (!props.temperatureValues?.length || !props.windChillValues?.length || !props.dewpointValues?.length || !isVisible.value) {
    return previous ?? [];
  }

  return {
    ...getDefaultChartOptions(ChartType.Temperature, props.historyGraph?.dateBegin, props.historyGraph?.dateEnd),
    ...getDefaultTooltipOptions(props.historyGraph?.unit?.temperatureUnit),
    ...getDefaultAnnotationsOptions(props.history?.minTemperatureReceivedAt, props.history?.maxTemperatureReceivedAt, props.history?.minTemperature, props.history?.maxTemperature)
  }
});
</script>
