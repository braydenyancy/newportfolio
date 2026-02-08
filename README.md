# Portfolio — React + Three.js

My personal portfolio site. React + Three.js frontend, Express backend, Drizzle ORM and PostgreSQL database — all wired up in a pnpm monorepo and containerized with Docker.

## Running It With Docker

`docker-compose up --build`

Quit docker terminal by pressing

`ctrl+c` or `q`

# Stop with
`docker-compose down `

# Or to wipe database

`docker-compose down -v`

# Packages
- Frontend: http://localhost:5173
- Backend API: http://localhost:3001
    Try http://localhost:3001/api/jokes/random


# For Local Development

Install dependencies
`pnpm install`

Start database
`pnpm db:up`

Run migrations
`pnpm db:migrate`

Seed initial data
`pnpm db:seed`

Start backend
`pnpm backend:dev`

Start frontend in separate terminal
`pnpm frontend:dev`


# Other Commands

Stop database
`pnpm db:down`

Reset database (wipe all data)
`pnpm db:reset`

Generate new migration files
`pnpm db:generate`

Run Drizzle studio for nice UI
`pnpm db:studio`