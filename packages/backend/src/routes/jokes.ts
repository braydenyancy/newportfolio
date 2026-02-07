import { Router } from 'express';
import { jokes } from '../db/schema';
import { db } from '../db';
import { eq } from 'drizzle-orm';
import type { Joke, SaveJokeRequest } from '@portfolio/shared';

const router = Router();

// dad joke api response shape
interface DadJokeApiResponse {
    id: string;
    joke: string;
    status: number;
}

// get random joke
router.get('/random', async (req, res) => {
    try {
        const response = await fetch('https://icanhazdadjoke.com/', {
            headers: {
                'Accept': 'application/json',
                'User-Agent': 'My portfolio App'
            }
        });

        if (!response.ok) {
            throw new Error(`External API error: ${response.statusText}`);
        }

        const data = await response.json() as DadJokeApiResponse;

        const joke: Joke = {
            id: data.id,
            content: data.joke,
            externalId: data.id
        }

        res.json(joke)

    } catch (error) {
        res.status(500).json({ error: 'Failed to fetch random joke' });
    }
})

// get all saves jokes
router.get('/', async (req, res) => {
    try {
        const allJokes = await db.select().from(jokes);
        res.json(allJokes);
    } catch (error) {
        res.status(500).json({ error: 'Failed to fetch all jokes' });
    }
});

// save a joke
router.post('/', async (req, res) => {
    try {
        const { content, externalId }: SaveJokeRequest = req.body;
        if (!content) {
            return res.status(400).json({ error: 'Content is required' });
        }

        const newJoke = await db.insert(jokes).values({
            content,
            externalId: externalId || null,
        }).returning();

        res.status(201).json(newJoke[0]);
    } catch (error) {
        res.status(500).json({ error: 'Failed to create joke' });
    }
});


// deletin
router.delete('/:id', async (req, res) => {
    try {
        const { id } = req.params;
        await db.delete(jokes).where(eq(jokes.id, Number(id)));
        res.json({ message: 'Joke deleted' });
    } catch (error) {
        res.status(500).json({ error: 'Failed to delete joke' });
    }
});


export default router;