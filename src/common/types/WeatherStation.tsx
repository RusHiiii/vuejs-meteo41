export interface WeatherStation {
    address: string;
    city: string;
    country: string;
    createdAt: string;
    description: string;
    elevation: string;
    id: number;
    lat: number;
    lng: number;
    model: string;
    name: string;
    postalCode: string;
    reference: string;
    shortDescription: string;
    updatedAt: string;
}

export type WeatherStationSearchResult = {
  numberOfResult: number;
  weatherStations: Array<WeatherStation>
};
