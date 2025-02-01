import type {WeatherStation} from "@/core/types/WeatherStation.tsx";
import type {User} from "@/core/types/User.tsx";

export interface Observation {
    id: string;
    message: string;
    createdAt: string;
    updatedAt: string;
    weatherStation: WeatherStation;
    user: User;
}
