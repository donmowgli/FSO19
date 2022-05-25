import { Courses, CoursePart } from '../types'

const Content = (courses : Courses) => {
    let contents : Array<JSX.Element> = [];
    courses.courses.forEach(part => {
        contents = contents.concat(Part(part));
    })
    return <p>{contents}</p>;
}

const Part = (part : CoursePart) : JSX.Element => {
    switch (part.type) {
        case "normal":
            return (
                <div>
                    <p>{part.name} {part.exerciseCount}</p>
                    <p>{part.description}</p>
                </div>
            )
        break;
        case "groupProject":
            return (
                <div>
                    <p>{part.name} {part.exerciseCount}</p>
                    <p>Project exercises {part.exerciseCount}</p>
                </div>
            )
        break;
        case "submission":
            return (
                <div>
                    <p>{part.name} {part.exerciseCount}</p>
                    <p>Submit to {part.exerciseSubmissionLink}</p>
                </div>
            )
        break;
    }
}

export { Content }