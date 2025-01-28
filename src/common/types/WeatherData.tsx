import type {Unit} from "@/common/types/Unit.tsx";
import type {WeatherStation} from "@/common/types/WeatherStation.tsx";

export interface SummaryWeatherStation {
    humidity: number;
    id: number;
    receivedAt: string;
    relativePressure: number;
    temperature: number;
    unit: Unit;
    weatherStation: WeatherStation;
    windDirectionAvg: number;
    windSpeedAvg: number;
}
