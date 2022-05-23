interface diagnoseEntry {
    code: string,
    name: string,
    latin?: string
}

interface patientEntry {
    id: string,
    name: string,
    dateOfBirth: string,
    ssn: string,
    gender: gender,
    occupation: string
}

enum gender {
    male,
    female
}

type nsPatientEntry = Omit<patientEntry, 'ssn'>;
type newPatientEntry = Omit<patientEntry, 'id'>;
type fields = { name : unknown, dateOfBirth : unknown, ssn : unknown, gender : unknown, occupation : unknown }

export {diagnoseEntry, patientEntry, gender, nsPatientEntry, newPatientEntry, fields}