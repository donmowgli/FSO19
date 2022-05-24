interface Text {
    text : string
}

interface Part {
    name : string,
    exerciseCount : number
}

interface Courses {
    courses : Array<Part>
}

export type { Text, Part, Courses }