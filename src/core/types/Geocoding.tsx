
interface Location {
    lat: number;
    lng: number;
}

interface Geometry {
    location: Location;
    location_type: string;
}

interface AddressComponent {
    long_name: string;
    short_name: string;
    types: string[];
}

interface GeocodeResult {
    address_components: AddressComponent[];
    formatted_address: string;
    geometry: Geometry;
    place_id: string;
    types: string[];
}

export interface GeocodeSearchResult {
    results: GeocodeResult[];
    status: string;
}

export interface GeocodeSearchFilter {
    address: string;
}