interface Text {
    text : string;
}

interface CoursePartBase {
    name : string;
    exerciseCount : number;
    type : string;
}

interface CoursePartDescription extends CoursePartBase{
    description : string;
}

interface CourseNormalPart extends CoursePartDescription {
    type : "normal";
}

interface CourseProjectPart extends CoursePartBase {
    type: "groupProject";
    groupProjectCount: number;
}

interface CourseSubmissionPart extends CoursePartDescription {
    type: "submission";
    exerciseSubmissionLink: string;
}

type CoursePart = CourseNormalPart | CourseProjectPart | CourseSubmissionPart ;

interface Courses {
    courses : Array<CoursePart>
}

export type { Text, CoursePart, Courses }