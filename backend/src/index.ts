import express from 'express';
import { PORT } from './constants';
import { corsMiddleware } from './cors';
import routes from './controller/index';
import bodyParser from 'body-parser';
import './mongoose';
const app = express();

app.use(corsMiddleware);
app.use(bodyParser.json({ limit: '10mb' }));
app.use('/api/', routes);

app.get('/healthcheck', (req, res) => res.send('Express + TypeScript Server'));

const server = app.listen(PORT, () => {
  console.log(`⚡️[server]: Server is running at http://localhost:${PORT}`);
});