import { Joke, SavedJoke, SaveJokeRequest } from '@portfolio/shared';

const API_URL = import.meta.env.VITE_API_BASE_URL;

export const fetchRandomJoke = async (): Promise<Joke> => {
    const res = await fetch(`${API_URL}/api/jokes/random`);
    return res.json();
}

export const getSavedJokes = async (): Promise<SavedJoke[]> => {
    const res = await fetch(`${API_URL}/api/jokes`);
    return res.json();
}

export const saveJoke = async (joke: SaveJokeRequest): Promise<SavedJoke> => {
    const res = await fetch(`${API_URL}/api/jokes`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(joke)
    });
    return res.json();
};

export const deleteJoke = async (id: number): Promise<void> => {
    await fetch(`${API_URL}/api/jokes/${id}`, {
        method: 'DELETE'
    });
};
