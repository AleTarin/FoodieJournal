import { Track } from './interfaces/track';

export class User {
    name: string;
    email: string;
    nickname: string;
    picture: string;
    paths?: Track[];
    journey?: number;
    last_challenge?: string;
    time_started?: string;

    constructor() {
        this.paths = [];
    }
}
