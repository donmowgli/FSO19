import express from 'express';
import { getEntries } from '../services/diagnoseService';

const router = express.Router();

router.get('/', (_req, res) => {
    res.send(getEntries());
});

router.post('/', (_req, res) => {
  res.send('Saving a diagnose');
});

export default router;