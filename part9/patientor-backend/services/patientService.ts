import { v4 as uuidv4 } from 'uuid';
import {patients as patientData} from '../data/patients';
import {patientEntry, nsPatientEntry, newPatientEntry, newEntry, entry} from '../types';
import { toNewPatientEntry } from '../utils';

const patients : Array<patientEntry> = patientData.map(obj => {
    const object = toNewPatientEntry(obj, obj.entries) as patientEntry;
    object.id = obj.id;
    return object;
})

const nsPatients : Array<nsPatientEntry> = patientData.map(obj => {
    const object = toNewPatientEntry(obj, obj.entries) as patientEntry;
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
    const newPatient : patientEntry = {id, ...entry};
    patients.push(newPatient);
    return newPatient;
};

const updatePatient = (entry : newEntry, patientId : string): patientEntry | undefined => {
    const id : string = uuidv4();
    const newEntry : entry = {id, ...entry};

    let updated : patientEntry = null as unknown as patientEntry;
    patients.map(patient => {if(patient.id === patientId){patient.entries = patient.entries.concat(newEntry); updated = patient;};})
    return updated;
}

export { getEntries, addPatient, getEntry, updatePatient };