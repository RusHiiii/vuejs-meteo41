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
  history: HistoryWeatherData | undefined,
  period: string | undefined,
}>();

const target = useTemplateRef<HTMLDivElement>('target');
const isVisible = shallowRef(true);

const { isActive } = useIntersectionObserver(
    target,
    ([entry]) => {
      isVisible.value = entry?.isIntersecting || false
    }
)

const chartDatas = computed(() => {
  if (!props.graphData?.datas || !isVisible.value) return [];

  let dataTemp = [];
  let windChill = [];
  let dewPoint = [];

  props.graphData.datas.map(data => {
    dataTemp.push([
      new Date(data.receivedAt).getTime(),
      data.temperature
    ]);

    dewPoint.push([
      new Date(data.receivedAt).getTime(),
      data.dewPoint
    ]);

    windChill.push([
      new Date(data.receivedAt).getTime(),
      data.windChill
    ]);
  });

  return [
    {
      name: 'Température',
      data: dataTemp
    },
    {
      name: 'Température ressentie',
      data: windChill
    },
    {
      name: 'Point de rosée',
      data: dewPoint
    }
]});

const chartOptions = computed(() => ({
  ...getDefaultChartOptions(ChartType.Temperature, props.graphData?.dateBegin, props.graphData?.dateEnd),
  ...getDefaultTooltipOptions(props.graphData?.unit?.temperatureUnit),
  ...getDefaultAnnotationsOptions(props.history?.minTemperatureReceivedAt, props.history?.maxTemperatureReceivedAt, props.history?.minTemperature, props.history?.maxTemperature)
}));
</script>
