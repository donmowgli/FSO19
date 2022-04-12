import React from 'react';
import { useState } from 'react';

const Header = ({name}) => {return <div><h1>{name}</h1></div>}
const StatisticLine = ({text, counter, appendix}) => <tbody><tr><td>{text}</td><td>{counter} {appendix}</td></tr></tbody>
const Button = ({handleClick, text}) => {return (<button onClick = {handleClick}>{text}</button>)}
const Statistics = ({good, neutral, bad}) => {

  const posVal = good * 1
  const negVal = bad * -1
  const average = (posVal + negVal) / (good + bad)
  const positive = (good / (good + neutral + bad) * 100)

  if (good === 0 && neutral === 0 && bad === 0) {
    return (
      <table>
        <StatisticLine text = "No feedback given" />
      </table>
    )
  }

  return (
    <table>
      <StatisticLine text = "Good" counter={good}/>
      <StatisticLine text = "Neutral" counter={neutral}/>
      <StatisticLine text = "Bad" counter={bad}/>
      <StatisticLine text = "Average" counter={average}/>
      <StatisticLine text = "Positive" counter={positive} appendix = "%"/>
    </table>
  )
}

const App = () => {
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  return (
    <div>
      <Header name = "Give feedback"/>
      <Button text = "Good" handleClick={() => setGood(good + 1)}/>
      <Button text = "Neutral" handleClick={() => setNeutral(neutral + 1)}/>
      <Button text = "Bad" handleClick={() => setBad(bad + 1)}/>
      <Header name = "Statistics"/>
      <Statistics good = {good} neutral = {neutral} bad = {bad} />
    </div>
  );
}

export default App;
