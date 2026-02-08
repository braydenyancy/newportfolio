import 'dotenv/config';
import { db } from './index.js';
import { jokes } from './schema.js';

async function reset() {
  try {
    console.log('Clearing database...');
    await db.delete(jokes);
    console.log('Database cleared.');
    process.exit(0);
  } catch (error) {
    console.error('Reset failed:', error);
    process.exit(1);
  }
}

reset();
