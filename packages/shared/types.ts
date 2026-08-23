export interface Project {
    id: string;
    caseNumber: string;
    name: string;
    tagline: string;
    description: string;
    tech: string[];
    status: 'LIVE' | 'IN DEVELOPMENT' | 'ARCHIVED';
    liveUrl?: string;
    repoUrl?: string;
    featured?: boolean;
}

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

export interface UpdateJokeRequest {
    content: string;
}