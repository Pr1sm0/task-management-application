import express from 'express';
import { Types } from 'mongoose';
import { projectService } from '../services/project';

const router = express.Router();

// Get projects by user id

router.get('/:userId/projects', async (req, res) => {
  try {
    const userId = Types.ObjectId(req.params.id);
    const projects = await projectService.getProjects(userId);
    return res.status(200).send(projects);
  } catch (e) {
    return res.status(400).send('Bad request!');
  }
});

export default router;