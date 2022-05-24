import { Courses } from '../types'

const Content = (courses : Courses) => {
    let contents : Array<JSX.Element> = [];
    courses.courses.forEach(part => {
        contents = contents.concat(CoursePart(part.name, part.exerciseCount));
    })
    return <p>{contents}</p>;
}

const CoursePart = (partName : string, exerciseCount : number) : JSX.Element => {
    return <p>{partName} {exerciseCount}</p>
}

export { Content }