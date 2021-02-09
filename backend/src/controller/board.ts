import express from 'express';
import { Types } from 'mongoose';
import { boardService } from '../service/board';

const router = express.Router();

// Update task status

router.patch('/tasks/:id', async (req, res) => {
  try {
    const ID = Types.ObjectId(req.params.id);
    const body = req.body;
    const task = await boardService.updateStatus(ID, body);
    return res.status(201).send(task);
  } catch (e) {
    return res.status(400).send('Bad request!');
  }
});

router.delete('/tasks/:id', async (req, res) => {
  try {
    const ID = Types.ObjectId(req.params.id);
    const task = await boardService.deleteTask(ID);
    return res.status(201).send(task);
  } catch (e) {
    return res.status(400).send('Bad request!');
  }
});

export default router;