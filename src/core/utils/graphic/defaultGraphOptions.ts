import moment from 'moment';
import fr from "apexcharts/dist/locales/fr.json";
import {ChartType} from "@/core/types/PeriodGraphic.tsx";

const chartOptions = {
  [ChartType.Humidity]: {
    text: 'Humidité',
    colors: ['#e7bf22'],
  },
  [ChartType.LeafWetness]: {
    text: 'Humidité foliaire',
    colors: ['#e7bf22'],
  },
  [ChartType.SoilTemperature]: {
    text: 'Température du sol (-30cm)',
    colors: ['#e7bf22'],
  },
  [ChartType.Temperature]: {
    text: 'Température, température ressentie et point de rosée',
    colors: ['#dec137', '#7ab11b', '#09a8e6'],
  },
  [ChartType.UV]: {
    text: 'UV',
    colors: ['#e7bf22'],
  },
  [ChartType.Pressure]: {
    text: 'Pression',
    colors: ['#e7bf22'],
  },
  [ChartType.PM]: {
    text: 'Particule fine',
    colors: ['#dec137', '#7ab11b', '#09a8e6'],
  },
  [ChartType.Rain]: {
    text: 'Pluie',
    colors: ['#dec137', '#09a8e6'],
  },
  [ChartType.SolarRadiation]: {
    text: 'Radiation solaire',
    colors: ['#e7bf22'],
  },
  [ChartType.Wind]: {
    text: 'Vent',
    colors: ['#dec137', '#09a8e6'],
  }
}

export function getDefaultChartOptions(chartType: ChartType, dateBegin: string | undefined, dateEnd: string | undefined): object {
  return {
    colors: chartOptions[chartType].colors,
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
      text: chartOptions[chartType].text,
      align: 'left',
    },
    grid: {
      borderColor: '#f1f1f1',
    },
    xaxis: {
      type: 'datetime',
      min: moment(dateBegin)?.unix() * 1000,
      max: moment(dateEnd)?.unix() * 1000,
      labels: {
        datetimeUTC: false,
      },
    },
    legend: {
      showForSingleSeries: true,
    },
    yaxis: {
      forceNiceScale: true
    }
  }
}

export function getDefaultTooltipOptions(firstGraphUnit: string | undefined, secondGraphUnit: string | undefined = undefined, thirdGraphUnit: string | undefined = undefined): object {
  return {
    tooltip: {
      x: {
        format: 'dd MMM HH:mm',
      },
      y: [
        {
          formatter: function (val: number) {
            return `${val} ${firstGraphUnit}`;
          },
        },
        {
          formatter: function (val: number) {
            return `${val} ${secondGraphUnit ?? firstGraphUnit}`;
          },
        },
        {
          formatter: function (val: number) {
            return `${val} ${thirdGraphUnit ?? firstGraphUnit}`;
          },
        },
      ],
    },
  }
}

export function getDefaultAnnotationsOptions(
    minReceivedAt: string | undefined,
    maxReceivedAt: string | undefined,
    minValue: number | string | undefined,
    maxValue: number | string | undefined
): object {
  return {
    annotations: {
      xaxis: [
        minReceivedAt && minValue ?
            {
              x: new Date(minReceivedAt).getTime(),
              borderColor: '#999',
              label: {
                text: minValue.toString(),
                style: {
                  color: '#fff',
                  background: '#09a8e6',
                },
              },
            } : null,
        maxReceivedAt && maxValue ?
            {
              x: new Date(maxReceivedAt).getTime(),
              borderColor: '#999',
              label: {
                text: maxValue.toString(),
                style: {
                  color: '#fff',
                  background: '#ed7839',
                },
              },
            } : null,
      ],
    },
  }
}