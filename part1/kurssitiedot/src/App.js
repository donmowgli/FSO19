import React from 'react'

const Header = (props) => {
  return (
    <div>
      <h1>{props.name}</h1>
    </div>
  )
}

const Content = (props) => {
  let parts = []
  props.course.parts.forEach(part => {
    parts = parts.concat(Part(part.name, part.exercises))
  })
  return parts
}

const Part = (content, count) => {
  return (
    <div>
      <p>{content}, {count}</p>
    </div>
  )
}

const Total = (props) => {
  let total = 0

  props.course.parts.forEach(part => {
    total += part.exercises
  })

  return (
    <div>
      <p>Number of exercises {total} </p>
    </div>
  )
}

const App = () => {
  const course = {
      name: 'Half Stack application development',
      parts: [
      {
        name:  'Fundamentals of React',
        exercises: 10
      },
      {
        name:  'Using props to pass data',
        exercises: 7
      },
      {
        name:  'State of a component',
        exercises: 14
      }
    ]
  }

  return (
    <div>
      <Header name = {course.name} />
      <Content course = {course}/>
      <Total course = {course}/>
    </div>
  );
}

export default App;
