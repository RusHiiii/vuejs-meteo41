import moment from 'moment';
import fr from "apexcharts/dist/locales/fr.json";
import {ChartType} from "@/core/types/PeriodGraphic.tsx";

const chartOptions = {
  [ChartType.Humidity]: {
    min: 0,
    max: 100,
    text: 'Humidité'
  },
  [ChartType.LeafWetness]: {
    min: 0,
    max: 100,
    text: 'Humidité foliaire'
  },
  [ChartType.SoilTemperature]: {
    text: 'Température du sol (-30cm)'
  },
  [ChartType.Temperature]: {
    min: -10,
    max: 40,
    text: 'Température, température ressentie et point de rosée'
  },
  [ChartType.UV]: {
    min: 0,
    text: 'UV'
  },
  [ChartType.Pressure]: {
    min: 990,
    max: 1040,
    text: 'Pression'
  }
}

export function getDefaultChartOptions(chartType: ChartType, dateBegin: string | undefined, dateEnd: string | undefined): object {
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
      forceNiceScale: true,
    }
  }
}

export function getDefaultTooltipOptions(unit: string | undefined): object {
  return {
    tooltip: {
      x: {
        format: 'dd MMM HH:mm',
      },
      y: [
        {
          formatter: function (val: number) {
            return `${val} ${unit}`;
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