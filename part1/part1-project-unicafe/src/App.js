import { useState } from "react";

const Header = () => <h2>Give your feedback</h2>

const Button = ({ handleClick, text}) => <button onClick={handleClick}>{text}</button>

const Statistic = ({text, value}) => <p>{text}:{value}</p>

const Statistics = ({ results: { good,neutral, bad }}) => {
  const total = good.total + neutral.total + bad.total
  const avg = total / 3
  const positiveShare = good.total / total * 100

  if (total>0) {
    return (
      <div>
        <h3>Statistics</h3>
        <Statistic text={good.key} value={good.total} />
        <Statistic text={neutral.key} value={neutral.total} />
        <Statistic text={bad.key} value={bad.total} />
        <p>Total: { total }</p>
        <p>Average: { avg }</p>
        <p>Positive feedback: { total > 0 ? positiveShare : 0 } %</p>
      </div>
    )
  } else return (
    <div>
      <p>No feedback given</p>
    </div>
  )
  
}

const FeedBackTracker = () => {
  const [ goodState, setGood ] = useState(0)
  const [ neutralState, setNeutral ] = useState(0)
  const [ badState, setBad ] = useState(0)

  const incrementGood = () => setGood(goodState+1)
  const incrementNeutral = () => setNeutral(neutralState+1)
  const incrementBad = () => setBad(badState+1)

  const good = 'good'
  const neutral = 'neutral'
  const bad = 'bad'

  const results = {
    good: {
      key: good,
      total: goodState
    },
    neutral: {
      key: neutral,
      total: neutralState
    },
    bad: {
      key: bad,
      total: badState
    }
  }

  return (
    <div>
      <Button handleClick={incrementGood} text={good} />
      <Button handleClick={incrementNeutral} text={neutral} />
      <Button handleClick={incrementBad} text={bad} />
      <Statistics results={results} />
    </div>
  )
}

const App =() => {
  return (
    <div>
      <Header />
      <FeedBackTracker />
    </div>
    
  )
}

export default App;
