import express from 'express';
import cors from 'cors';
import * as dotenv from 'dotenv';
import jokesRouter from './routes/jokes';

dotenv.config({ path: "../../.env" });

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