import express from 'express';
import { Types } from 'mongoose';
import { taskService } from '../service/task';

const router = express.Router();

// Update task status

router.patch('/tasks/:id', async (req, res) => {
  try {
    const id = Types.ObjectId(req.params.id);
    const body = req.body;
    const task = await taskService.updateStatus(id, body);
    return res.status(200).send(task);
  } catch (e) {
    return res.status(400).send('Bad request!');
  }
});

router.delete('/tasks/:id', async (req, res) => {
  try {
    const id = Types.ObjectId(req.params.id);
    const task = await taskService.deleteTask(id);
    return res.status(200).send(task);
  } catch (e) {
    return res.status(400).send('Bad request!');
  }
});

export default router;