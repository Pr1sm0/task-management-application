import express from 'express';
import { Types } from 'mongoose';
import { userService } from '../services/user';

const router = express.Router();

// Login & register

router.post('/login', async (req, res) => {
  try {
    const user = await userService.createUser(req.body);
    return res.status(201).send(user);
  } catch (e) {
    return res.status(400).send('Bad request!');
  }
});

// User info

router.get('/emailcheck', async (req, res) => {
  try {
    const user = await userService.checkUserByEmail(req.body);
    return res.status(200).send(user);
  } catch (e) {
    return res.status(400).send('Bad request!');
  }
});

// Get user info by id

router.get('/:id', async (req, res) => {
  try {
    const id = Types.ObjectId(req.params.id);
    const user = await userService.getUserInfoById(id);
    return res.status(200).send(user);
  } catch (e) {
    return res.status(400).send('Bad request!');
  }
});

export default router;