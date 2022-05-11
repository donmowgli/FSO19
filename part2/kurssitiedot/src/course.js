import React from 'react';

const Header = (props) => {
  return (
    <div>
      <h1>{props.name}</h1>
    </div>
  )
}

const Content = ({parts}) => {
  return (
    <div>
        {parts.map(part =>
          <div key={part.id}>
            <p>{part.name}, {part.exercises}</p>
          </div>
        )}
    </div>
  )
}

const Total = ({parts}) => {
  let iValue = 0;
  const sum = parts.reduce((s, p) => s + p.exercises, iValue)
  return (
    <div>
      <p>Number of exercises {sum} </p>
    </div>
  )
}

const Course = ({courses}) => {
  return (
    <div>
      <Header name = {courses.name} />
      <Content parts = {courses.parts}/>
      <Total parts = {courses.parts}/>
  </div>
  )
}

export default Course;