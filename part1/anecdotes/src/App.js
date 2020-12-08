import { useState } from "react";

const App = () => {
  const [selected, setSelected] = useState(0)
  const anecdotes = [
    'If it hurts, do it more often',
    'Adding manpower to a late software project makes it later!',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Increasingly, people seem to misinterpret complexity as sophistication, which is baffling --- the incomprehensible should cause suspicion rather than admiration.',
    'If you cannot grok the overall structure of a program while taking a shower, you are not ready to code it.',
    'I have always found that plans are useless, but planning is indispensable.',
    'The perfect project plan is possible if one first documents a list of all the unknowns.',
    'If something is worth doing once, its worth building a tool to do it.'
  ]

  const selectRandom = () => setSelected(anecdotes.indexOf(anecdotes[Math.floor(Math.random() * anecdotes.length)]))

  const [votes, setVote] = useState(Array(anecdotes.length+1).fill(0))
  
  const upvote = () => {
    votes[selected]+=1
    setVote({...votes})
  }

  const highest = Object.keys(votes).reduce((a, b) => votes[a] > votes[b] ? a : b)
  const max = Math.max(...Object.values(votes))
  const text = max > 0 ? `${anecdotes[highest]} - is the most popular`: 'No upvotes yet' 

  return (
    <div>
      <p>{anecdotes[selected]}</p>
      <p>has {votes[selected]} votes</p>
      <Button handleClick={selectRandom} text='random anecdote'/>
      <Button handleClick={upvote} text='upvote' />
      <p>{text}</p>
    </div>
  )
}

const Button = ({ handleClick, text}) => <button onClick={handleClick}>{text}</button>


export default App;
