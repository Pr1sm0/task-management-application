import express from 'express';
import { userService } from '../service/user';

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

router.post('/emailcheck', async (req, res, next) => {
  try {
    const user = await userService.checkUserByEmail(req.body);
    return res.status(201).send(user);
  } catch (e) {
    return res.status(400).send('Bad request!');
  }
});

export default router;