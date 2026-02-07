export interface Joke {
    id: string;
    content: string;
    externalId: string;
}

export interface SavedJoke {
    id: number;
    content: string;
    externalId: string | null;
    createdAt: string;
    updatedAt: string;
}

export interface SaveJokeRequest {
    content: string;
    externalId: string | null;
}