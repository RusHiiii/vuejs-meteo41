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
  pm25Values: number[] | undefined,
  aqiValues: number[] | undefined,
  aqiAvgValues: number[] | undefined
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
  if (!props.pm25Values?.length || !props.aqiValues?.length || !props.aqiAvgValues?.length || !isVisible.value) {
    return previous ?? [];
  }

  return [
    {
      name: 'Qualité de l\'air',
      data: props.aqiValues
    },
    {
      name: 'Qualité de l\'air moyen',
      data: props.aqiAvgValues
    },
    {
      name: 'Particule fine',
      data: props.pm25Values
    }
]});

const chartOptions = computed((previous) => {
  if (!props.pm25Values?.length || !props.aqiValues?.length || !props.aqiAvgValues?.length || !isVisible.value) {
    return previous ?? {};
  }

  return {
    ...getDefaultChartOptions(ChartType.PM, props.historyGraph?.dateBegin, props.historyGraph?.dateEnd),
    ...getDefaultTooltipOptions('', '', props.historyGraph?.unit?.pmUnit),
    ...getDefaultAnnotationsOptions(props.history?.minPm25ReceivedAt, props.history?.maxPm25ReceivedAt, props.history?.minPm25, props.history?.maxPm25)
  }
});
</script>
