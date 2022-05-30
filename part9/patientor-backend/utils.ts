import { newPatientEntry, fields, gender, entry} from "./types"

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

export { toNewPatientEntry }