<template>
  <apexchart
      v-if="chartDatas"
      type="line"
      height="350"
      :options="chartOptions"
      :series="chartDatas"
  />
</template>

<script setup lang="ts">
import type {HistoryWeatherData, HistoryWeatherGraphSearchResult} from "@/core/types/WeatherData.tsx";
import {computed} from "vue";
import {
  getDefaultAnnotationsOptions,
  getDefaultChartOptions,
  getDefaultTooltipOptions
} from "@/core/utils/graphic/defaultGraphOptions.ts";
import {ChartType} from "@/core/types/PeriodGraphic.tsx";

const props = defineProps<{
  graphData: HistoryWeatherGraphSearchResult | undefined,
  history: HistoryWeatherData | undefined,
  period: string | undefined,
}>();

const chartDatas = computed(() => {
  if (!props.graphData?.datas) return [];

  return [{
    name: 'Radiation solaire',
    data: props.graphData.datas.map(data => ([
      new Date(data.receivedAt).getTime(),
      data.solarRadiation
    ]))
  }];
});

const chartOptions = computed(() => ({
  ...getDefaultChartOptions(ChartType.SolarRadiation, props.graphData?.dateBegin, props.graphData?.dateEnd),
  ...getDefaultTooltipOptions(props.graphData?.unit?.solarRadiationUnit),
  ...getDefaultAnnotationsOptions(undefined, props.history?.maxSolarRadiationReceivedAt, undefined, props.history?.maxSolarRadiation)
}));
</script>
