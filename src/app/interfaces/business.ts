export class Business {
    id: string;
    name: string;
    phone: string;
    rating: number;
    display_phone?: string;
    categories?: Categories[];
    coordinates?: Coord[];
    is_claimed?: boolean;
    is_closed?: boolean;
    location?: Locat[];
    photos?: string[];
    review_count?: number;
    url?: string;
}

export class Categories {
    alias?: string;
    title: string;
}

export class Locat {
    address1: string;
    address2?: string;
    address3?: string;
    city?: string;
    country?: string;
    cross_stress?: string;
}

export class Coord {
    latitude: number;
    longitude: number;
}
