import moment, {type Moment} from 'moment';
import fr from "apexcharts/dist/locales/fr.json";
import type {HistoryWeatherGraphSearchResult} from "@/core/types/WeatherData.tsx";

export function getDefaultChartOptions(graphData: HistoryWeatherGraphSearchResult | undefined): object {
  return {
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
      min: moment(graphData?.dateBegin)?.unix() * 1000,
      max: moment(graphData?.dateEnd)?.unix() * 1000,
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
    }
  }
}