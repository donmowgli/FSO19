interface diagnoseEntry {
    code: string;
    name: string;
    latin?: string;
}

interface patientEntry {
    id: string;
    name: string;
    dateOfBirth: string;
    ssn: string;
    gender: gender;
    occupation: string;
    entries : Array<entry>;
}

interface baseEntry {
    id: string;
    description: string;
    date: string;
    specialist: string;
    diagnosisCodes?: Array<diagnoseEntry['code']>;
}

interface healthCheckEntry extends baseEntry {
    type: "HealthCheck";
    healthCheckRating: healthCheckRating;
}

interface occupationalHealthcareEntry extends baseEntry {
    type: "OccupationalHealthcare";
    employerName: string;
    sickLeave?: sickLeave;
}

interface hospitalEntry extends baseEntry{
    type: "Hospital";
    discharge: discharge;
}

interface sickLeave {
    startDate: string;
    endDate: string
}

interface discharge {
    date: string;
    criteria: string;
}

enum gender {
    Male = "male",
    Female = "female",
    Other = "other"
}

enum healthCheckRating {
    "Healthy" = 0,
    "LowRisk" = 1,
    "highRisk" = 2,
    "CriticalRisk" = 3
}
type nsPatientEntry = Omit<patientEntry, 'ssn' | 'entries'>;
type newPatientEntry = Omit<patientEntry, 'id'>;
type entry = healthCheckEntry | occupationalHealthcareEntry | hospitalEntry;
// Define special omit for unions
type UnionOmit<T, K extends string | number | symbol> = T extends unknown ? Omit<T, K> : never;
type newEntry = UnionOmit<entry, 'id'>;
type fields = { name : unknown, dateOfBirth : unknown, ssn : unknown, gender : unknown, occupation : unknown, entries? : unknown }

export {diagnoseEntry, patientEntry, entry, gender, nsPatientEntry, newPatientEntry, newEntry, fields}