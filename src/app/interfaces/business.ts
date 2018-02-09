export class Business {
    id: string;
    name: string;
    phone: string;
    rating: number;
    price?: string;
    display_phone?: string;
    categories?: Categories[];
    coordinates?: Coord[];
    is_claimed?: boolean;
    is_closed?: boolean;
    location?: Locat[];
    photos?: string[];
    review_count?: number;
    url?: string;
    image_url?: string;

    // New
    status?: number;

    constructor() {
        this.status = 0;
    }
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
    display_address?: string[];
}

export class Coord {
    latitude: number;
    longitude: number;
}
