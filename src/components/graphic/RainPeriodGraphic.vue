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
  rainValues: number[] | undefined,
  rainRateValues: number[] | undefined,
  history: HistoryWeatherData | undefined
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
  if (!props.rainValues?.length || !props.rainRateValues?.length || !isVisible.value) {
    return previous ?? [];
  }

  return [
    {
      name: 'Pluie',
      data: props.rainValues
    },
    {
      name: 'Taux de pluie',
      data: props.rainRateValues
    }
  ];
});

const chartOptions = computed((previous) => {
  if (!props.rainValues?.length || !props.rainRateValues?.length || !isVisible.value) {
    return previous ?? {};
  }

  return {
    ...getDefaultChartOptions(ChartType.Rain, props.historyGraph?.dateBegin, props.historyGraph?.dateEnd),
    ...getDefaultTooltipOptions(props.historyGraph?.unit?.rainUnit, props.historyGraph?.unit?.rainUnit + '/h'),
    ...getDefaultAnnotationsOptions(undefined, props.history?.maxRainRateReceivedAt, undefined, props.history?.maxRainRate)
  }
});
</script>
