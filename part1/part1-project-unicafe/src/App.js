import { useState } from "react";

const Header = () => <h2>Give your feedback</h2>

const Button = ({ handleClick, text}) => <button onClick={handleClick}>{text}</button>

const Statistics = (props) => {
  const { nameGood, totalGood } = props.results.goodCounter
  const { nameNeutral, totalNeutral } = props.results.neutralCounter
  const { nameBad, totalBad } = props.results.badCounter
  const total = totalGood + totalNeutral + totalBad

  if (total>0) {
    return (
      <div>
        <h3>Statistics</h3>
        <p>{nameGood}: {totalGood}</p>
        <p>{nameNeutral}: {totalNeutral}</p>
        <p>{nameBad}: {totalBad}</p>
        <p>Total: {total}</p>
        <p>Average: { (totalGood+totalNeutral+totalBad) / 3 }</p>
        <p>Positive feedback: { total > 0 ? Math.round(totalGood / total * 100) : 0 } %</p>
      </div>
    )
  }

  return (
    <div>
      <p>No feedback given</p>
    </div>
  )
  
}

const FeedBackTracker = () => {
  const [ good, setGood ] = useState(0)
  const [ neutral, setNeutral ] = useState(0)
  const [ bad, setBad ] = useState(0)

  const incrementGood = () => setGood(good+1)
  const incrementNeutral = () => setNeutral(neutral+1)
  const incrementBad = () => setBad(bad+1)

  const goodFeedback = 'good'
  const neutralFeedback = 'neutral'
  const badFeedback = 'bad'

  const results = {
    goodCounter: {
      nameGood: goodFeedback,
      totalGood: good
    },
    neutralCounter: {
      nameNeutral: neutralFeedback,
      totalNeutral: neutral
    },
    badCounter: {
      nameBad: badFeedback,
      totalBad: bad
    }
  }

  return (
    <div>
      <Button handleClick={incrementGood} text={goodFeedback} />
      <Button handleClick={incrementNeutral} text={neutralFeedback} />
      <Button handleClick={incrementBad} text={badFeedback} />
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
