import { Courses } from "../types"

const Total = (courses : Courses) => {
    return(
        <p>
            Number of exercises{" "}
            {courses.courses.reduce((carry, part) => carry + part.exerciseCount, 0)}
        </p>
    )
}

export { Total }