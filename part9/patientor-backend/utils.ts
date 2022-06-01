import { newPatientEntry, newEntry, fields, gender, entry} from "./types"

const toNewPatientEntry = ( {name, dateOfBirth, ssn, gender, occupation}: fields, entries : Array<entry> ): newPatientEntry => {
    const newPatient: newPatientEntry = {
        name : parseValue(name),
        dateOfBirth : parseValue(dateOfBirth),
        ssn : parseValue(ssn),
        gender : parseGender(gender),
        occupation : parseValue(occupation),
        entries : parseEntries(entries)
    }
    return newPatient;
}

const toNewEntry = ({...fields}): newEntry => {
    let newEntry : newEntry = null as unknown as entry;
    switch(fields.type) {
        case 'healthCheck':
            newEntry = {
                description : fields.description,
                date : fields.date,
                specialist : fields.specialist,
                diagnosisCodes : fields.diagnosisCodes,
                type : fields.type,
                healthCheckRating : fields.healthCheckRating
            }
            break;
        case 'OccupationalHealthCare':
            newEntry = {
                description : fields.description,
                date : fields.date,
                specialist : fields.specialist,
                diagnosisCodes : fields.diagnosisCodes,
                type : fields.type,
                employerName : fields.employerName,
                sickLeave : fields.sickLeave
            }
            break;
        case 'Hospital':
            newEntry = {
                description : fields.description,
                date : fields.date,
                specialist : fields.specialist,
                diagnosisCodes : fields.diagnosisCodes,
                type : fields.type,
                discharge : fields.discharge
            }
            break;
    }
    return newEntry;
}

const parseGender = (value : unknown): gender => {
    const stringValue : string = parseValue(value)
    if(stringValue != 'male' && stringValue != 'female' && stringValue != 'other'){throw new Error('Incorrect or missing value')}
    else {
        const enumValue = stringValue as gender;
        return enumValue;
    }
}

const parseEntries = (value : unknown): Array<entry> => {
    if(!Array.isArray(value)) {throw new Error('Incorrect value, not an array');}
    return value as Array<entry>;
}

const parseValue = (value : unknown): string => {
    if(!value || !isString(value)){throw new Error('Incorrect or missing value')}
    return value;
}

const isString = (text : unknown): text is string => {
    return typeof text === 'string' || text instanceof String;
}

export { toNewPatientEntry, toNewEntry }