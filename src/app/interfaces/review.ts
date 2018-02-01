export interface Review {
    id?: string;
    rating?: number;
    text: string;
    time_created?: string;
    url?: string;
    user?: YelpUser;
}

export interface YelpUser {
    image_url: string;
    name: string;
}
