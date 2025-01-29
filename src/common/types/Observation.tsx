import type {WeatherStation} from "@/common/types/WeatherStation.tsx";
import type {User} from "@/common/types/User.tsx";

export interface Observation {
    id: string;
    message: string;
    createdAt: string;
    updatedAt: string;
    weatherStation: WeatherStation;
    user: User;
}
