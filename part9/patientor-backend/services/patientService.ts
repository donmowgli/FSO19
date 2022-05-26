import { v4 as uuidv4 } from 'uuid';
import {patients as patientData} from '../data/patients';
import {patientEntry, nsPatientEntry, newPatientEntry} from '../types';
import { toNewPatientEntry } from '../utils';

const patients : Array<patientEntry> = patientData.map(obj => {
    const object = toNewPatientEntry(obj) as patientEntry;
    object.id = obj.id;
    return object;
})

const nsPatients : Array<nsPatientEntry> = patientData.map(obj => {
    const object = toNewPatientEntry(obj) as patientEntry;
    object.id = obj.id;
    return object;
})

const getEntries = (): Array<nsPatientEntry> => {
  return nsPatients.map(({ id, name, dateOfBirth, gender, occupation }) => ({
      id,
      name,
      dateOfBirth,
      gender,
      occupation
  }));
};

const getEntry = (id : string): nsPatientEntry | undefined => {
    let entry;
    patients.find(patient => {if(patient.id === id) entry = patient})
    return entry;
}

const addPatient = (entry : newPatientEntry): patientEntry => {
    const id : string = uuidv4();
    const newPatient : patientEntry = {id, ...entry}
    patients.push(newPatient);
    return newPatient;
};

export { getEntries, addPatient, getEntry };