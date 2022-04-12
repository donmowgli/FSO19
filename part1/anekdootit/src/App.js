import React from 'react';
import { useState } from 'react'

function random (from, to){
  return (Math.floor(Math.random() * to) + from)
}

function getBest (){
  let most = 0
  let best = 0

  for (let i = 0; i < points.length; i++) {
    if(points[i] > most){
      most = points[i]
      best = i
    }
  }
  return best
}

const anecdotes = [
  'If it hurts, do it more often.',
  'Adding manpower to a late software project makes it later!',
  'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
  'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
  'Premature optimization is the root of all evil.',
  'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
  'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when dianosing patients.'
]
let points = new Array(anecdotes.length -1).fill(0)

const Header = ({text}) => {return (<div><h1>{text}</h1></div>)}
const Display = ({text}) => {return (<div>{text}</div>)}
const Button = ({handleClick, text}) => {return (<button onClick = {handleClick}>{text}</button>)}

function App() {
  const [selected, setSelected] = useState(0)
  const [best, setBest] = useState(0)

  function vote (){
    let copy = points
    copy[selected] += 1
    points = copy
    setSelections(selected)
  }

  function setSelections (selected){
    setSelected(selected)
    setBest(getBest())
  }

  return (
    <div>
      <Header text = "Anecdote of the day"/>
      <Display text = {anecdotes[selected]} />
      <Display text = {"Has " + points[selected] + " votes"} />
      <Button text = "Vote" handleClick={()=> vote()}/>
      <Button text = "Next anecdote" handleClick={()=> setSelections(random(0, anecdotes.length - 1))} />
      <Header text = "Anecdote with the most votes"/>
      <Display text = {anecdotes[best]} />
    </div>
  );
}

export default App;
