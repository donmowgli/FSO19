import diagnoseData from '../data/diagnoses.json';
import { diagnoseEntry } from '../types';

const diagnoses: Array<diagnoseEntry> = diagnoseData as Array<diagnoseEntry>;

const getEntries = (): Array<diagnoseEntry> => {
  return diagnoses;
};

const getEntry = (code : string): diagnoseEntry | undefined => {
  let entry;
  diagnoses.find(diagnose => {if(diagnose.code === code) entry = diagnose})
  return entry;
}

const addDiagnose = () => {
  return null;
};

export { getEntries, getEntry, addDiagnose };