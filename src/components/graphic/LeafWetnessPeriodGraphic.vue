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
  leafWetnessValues: number[] | undefined
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
  if (!props.leafWetnessValues || !isVisible.value) return [];

  return [{
    name: 'Humidité foliaire',
    data: props.leafWetnessValues
  }];
});

const chartOptions = computed(() => ({
  ...getDefaultChartOptions(ChartType.LeafWetness, props.historyGraph?.dateBegin, props.historyGraph?.dateEnd),
  ...getDefaultTooltipOptions(props.historyGraph?.unit?.humidityUnit),
  ...getDefaultAnnotationsOptions(undefined, props.history?.maxLeafWetnessReceivedAt, undefined, props.history?.maxLeafWetness)
}));
</script>
