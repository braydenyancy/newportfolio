import 'dotenv/config';
import { db } from './index.js';
import { jokes } from './schema.js';

const seedJokes = [
  {
    content: "Why don't scientists trust atoms? Because they make up everything!",
    externalId: null,
  },
  {
    content: "Why did the scarecrow win an award? He was outstanding in his field!",
    externalId: null,
  },
  {
    content: "What do you call a sleeping bull? A bulldozer!",
    externalId: null,
  },
];

async function seed() {
  try {
    console.log('Starting database seed...');

    const existingJokes = await db.select().from(jokes).limit(1);

    if (existingJokes.length > 0) {
      console.log('Database already seeded, skipping.');
      process.exit(0);
    }

    await db.insert(jokes).values(seedJokes);

    console.log(`Seeded ${seedJokes.length} jokes.`);
    process.exit(0);
  } catch (error) {
    console.error('Seed failed:', error);
    process.exit(1);
  }
}

seed();
