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

  return [{
    name: 'UV',
    data: props.graphData.datas.map(data => ([
      new Date(data.receivedAt).getTime(),
      data.uv
    ]))
  }];
});

const chartOptions = computed(() => ({
  ...getDefaultChartOptions(ChartType.UV, props.graphData?.dateBegin, props.graphData?.dateEnd),
  ...getDefaultAnnotationsOptions(undefined, props.history?.maxUvReceivedAt, undefined, props.history?.maxUv)
}));
</script>
