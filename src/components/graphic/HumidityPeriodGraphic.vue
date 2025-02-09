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
import fr from 'apexcharts/dist/locales/fr.json';
import type {HistoryWeatherData, HistoryWeatherGraphSearchResult} from "@/core/types/WeatherData.tsx";
import {computed, ref} from "vue";
import moment from "moment/moment";

const props = defineProps<{
  graphData: HistoryWeatherGraphSearchResult | undefined,
  history: HistoryWeatherData | undefined,
  period: string | undefined,
}>();

const chartDatas = computed(() => {
  if (!props.graphData?.datas) return [];

  return [{
    name: 'Humidité',
    data: props.graphData.datas.map(data => ([
      new Date(data.receivedAt).getTime(),
      data.humidity
    ]))
  }];
});

const chartOptions = computed(() => ({
  colors: ['#e7bf22'],
  chart: {
    locales: [fr],
    defaultLocale: 'fr',
    type: 'line',
    foreColor: '#fff',
    toolbar: {
      show: true,
      tools: {
        download: false,
        pan: false,
      },
    },
    zoom: {
      enabled: true,
      type: 'xy',
      autoScaleYaxis: true,
    },
  },
  noData: {
    text: 'Aucune données :(',
  },
  dataLabels: {
    enabled: false,
  },
  stroke: {
    curve: 'smooth',
    width: 2,
  },
  title: {
    text: 'Humidité',
    align: 'left',
  },
  grid: {
    borderColor: '#f1f1f1',
  },
  xaxis: {
    type: 'datetime',
    min: moment(props.graphData?.dateBegin)?.unix() * 1000,
    max: moment(props.graphData?.dateEnd)?.unix() * 1000,
    labels: {
      datetimeUTC: false,
    },
  },
  legend: {
    showForSingleSeries: true,
  },
  yaxis: {
    min: 0,
    max: 100,
    forceNiceScale: true,
  },
  tooltip: {
    x: {
      format: 'dd MMM HH:mm',
    },
    y: [
      {
        formatter: function (
            val,
            { series, seriesIndex, dataPointIndex, w }
        ) {
          return (
              w.globals.series[seriesIndex][dataPointIndex] +
              ' ' +
              props.graphData?.unit?.humidityUnit
          );
        },
        title: {
          formatter: function (val, opts) {
            return val + ' -';
          },
        },
      },
    ],
  },
  annotations: {
    xaxis: [
      props.history?.minHumidityReceivedAt ?
        {
          x: new Date(props.history.minHumidityReceivedAt).getTime(),
          borderColor: '#999',
          label: {
            text: props.history?.minHumidity.toString(),
            style: {
              color: '#fff',
              background: '#09a8e6',
            },
          },
        } : null,
      props.history?.maxHumidityReceivedAt ?
      {
        x: new Date(props.history.maxHumidityReceivedAt).getTime(),
        borderColor: '#999',
        label: {
          text: props.history?.maxHumidity.toString(),
          style: {
            color: '#fff',
            background: '#ed7839',
          },
        },
      } : null,
    ],
  },
}));
</script>
