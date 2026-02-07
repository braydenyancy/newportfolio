import express from 'express';
import cors from 'cors';
import 'dotenv/config';

import jokesRouter from './routes/jokes';

const app = express();
const PORT = process.env.PORT;

app.use(cors());
app.use(express.json());

app.get('/api/health', (req, res) => {
    res.json({ status: 'ok', timestamp: new Date().toISOString() });
});

app.use('/api/jokes', jokesRouter);

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});