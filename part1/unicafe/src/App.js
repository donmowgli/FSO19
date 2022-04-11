import React from 'react';
import { useState } from 'react';

const Header = ({name}) => {return <div><h1>{name}</h1></div>}
const Display = ({text, counter, appendix}) => <div>{text} {counter} {appendix}</div>
const Button = ({handleClick, text}) => {return (<button onClick = {handleClick}>{text}</button>)}

const App = () => {
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)
  
  const posVal = good * 1
  const negVal = bad * -1
  const average = (posVal + negVal) / (good + bad)
  const positive = (good / (good + neutral + bad) * 100)

  return (
    <div>
      <Header name = "Give feedback"/>
      <Button text = "Good" handleClick={() => setGood(good + 1)}/>
      <Button text = "Neutral" handleClick={() => setNeutral(neutral + 1)}/>
      <Button text = "Bad" handleClick={() => setBad(bad + 1)}/>
      <Header name = "Statistics"/>
      <Display text = "Good" counter={good}/>
      <Display text = "Neutral" counter={neutral}/>
      <Display text = "Bad" counter={bad}/>
      <Display text = "Average" counter={average}/>
      <Display text = "Positive" counter={positive} appendix = "%"/>
    </div>
  );
}

export default App;
