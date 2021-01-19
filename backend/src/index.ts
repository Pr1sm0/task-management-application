import express from 'express';
import { PORT } from './constant';
import { corsMiddleware } from './middleware/cors';
const app = express();

app.use(corsMiddleware);

app.get('/healthcheck', (req, res) => res.send('Express + TypeScript Server'));

const server = app.listen(PORT, () => {
  console.log(`⚡️[server]: Server is running at http://localhost:${PORT}`);
});