import { Business } from './business';

export interface Track {
    id?: number;
    categories: string;
    icon: string;
    type: string;
    challenges: Business[];
    description: string;
    duration: number;
    completenessPercentage: number;
}
