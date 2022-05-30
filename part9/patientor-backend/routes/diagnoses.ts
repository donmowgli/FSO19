import express from 'express';
import { getEntries, getEntry } from '../services/diagnoseService';

const router = express.Router();

router.get('/', (_req, res) => {
    res.send(getEntries());
});

router.get('/:code', (req, res) => {
  const diagnosis = getEntry(req.params.code);
  if(diagnosis){res.send(diagnosis)}
  else{res.sendStatus(404)}
});

router.post('/', (_req, res) => {
  res.send('Saving a diagnose');
});

export default router;