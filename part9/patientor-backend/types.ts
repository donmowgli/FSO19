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
    entries : entry[];
}

interface entry {

}

enum gender {
    Male = "male",
    Female = "female",
    Other = "other"
}

type nsPatientEntry = Omit<patientEntry, 'ssn' | 'entries'>;
type newPatientEntry = Omit<patientEntry, 'id'>;
type fields = { name : unknown, dateOfBirth : unknown, ssn : unknown, gender : unknown, occupation : unknown, entries? : unknown }

export {diagnoseEntry, patientEntry, entry, gender, nsPatientEntry, newPatientEntry, fields}