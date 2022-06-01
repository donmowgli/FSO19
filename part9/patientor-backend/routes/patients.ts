import express from 'express';
import { getEntries, getEntry, addPatient, updatePatient } from '../services/patientService';
import { toNewPatientEntry } from '../utils';
import { entry, patientEntry } from '../types';

const router = express.Router();

router.get('/', (_req, res) => {
    res.send(getEntries());
});

router.get('/:id', (_req, res) => {
    const patient = getEntry(_req.params.id);
    if(patient) {res.send(patient)}
    else{res.sendStatus(404)}
});

router.post('/', (_req, res) => {
    const entries : Array<entry> = [];
    try {
        const newPatient = toNewPatientEntry(_req.body, entries);
        const addedPatient = addPatient(newPatient);
        res.json(addedPatient)
    } catch (error : unknown) {
        let errorMessage = 'Something went wrong';
        if (error instanceof Error){
            errorMessage += ' Error: ' + error.message;
        }
        res.status(400).send(errorMessage);
    }
});

router.post('/:id', (_req, res) => {
    const entry : patientEntry = _req.body;
    try {
        const updatedPatient = updatePatient(entry);
        res.json(updatedPatient)
    } catch (error : unknown) {
        let errorMessage = 'Something went wrong';
        if (error instanceof Error){
            errorMessage += ' Error: ' + error.message;
        }
        res.status(400).send(errorMessage);
    }
});

export default router;