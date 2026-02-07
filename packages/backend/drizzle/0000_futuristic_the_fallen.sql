CREATE TABLE "jokes" (
	"id" serial PRIMARY KEY NOT NULL,
	"content" text NOT NULL,
	"external_id" varchar(255),
	"created_at" timestamp DEFAULT now() NOT NULL,
	"updated_at" timestamp DEFAULT now() NOT NULL
);
