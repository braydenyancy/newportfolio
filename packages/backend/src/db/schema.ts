import { pgTable, serial, text, varchar, timestamp } from 'drizzle-orm/pg-core';

export const jokes = pgTable('jokes', {
    id: serial('id').primaryKey(),
    content: text('content').notNull(),
    externalId: varchar('external_id', { length: 255 }),
    createdAt: timestamp('created_at').defaultNow().notNull(),
    updatedAt: timestamp('updated_at').defaultNow().notNull(),
});