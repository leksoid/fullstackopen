import React, { useState } from 'react';
import ReactDOM from 'react-dom';

const Header = ({courseName}) => <h1>{courseName}</h1>

const Content = (props) => {
  return (
    <div>
      <Part part={props.parts[0].name} exercises={props.parts[0].exercises}/>
      <Part part={props.parts[1].name} exercises={props.parts[1].exercises}/>
      <Part part={props.parts[2].name} exercises={props.parts[2].exercises}/>
    </div>
  )
}

const Part = ({part, exercises}) => <p>{part} {exercises}</p>

const Total = (props) => {
  return (
    <div>
      <p>Number of exercises {props.parts[0].exercises+props.parts[1].exercises+props.parts[2].exercises}</p>
    </div>
  )
}

const Hello = (props) => {
  const { name, age } = props.author
  const bornYear = () => new Date().getFullYear() - age
  
  return (
    <div>
      <p>Hello, {name}, {age} yo</p>
  <p>You were probably born in {bornYear()}</p>
    </div>
  )
}

const Counter = () => {
  const [ counter, setCounter ] = useState(0) // Returns a stateful value, and a function to update it.
  const increment = () => setCounter(counter+1)
  const reset = () => setCounter(0)
  const decrease = () => setCounter(counter-1)

  return (
    <div>
      <Display counter={counter}/>
      <Button
        handleClick={increment}
        text='plus'
      />  
      <Button
        handleClick={decrease}
        text='minus'
      />
      <Button
        handleClick={reset}
        text='zero'
      />        
    </div>
  )

}

const Display = ({counter}) => {
  if (counter === 0) {
    return (
      <div>
        the app will register your clicks
      </div>
    )
  }

  return (
    <div>
      <div>{counter} {counter !== 1 ? 'clicks' : 'click'} made</div>
    </div>
  )

}

const Button = ({ handleClick, text}) => <button onClick={handleClick}>{text}</button>

const App = () => {
  const course = {
    name: "Half Stack Application Development",
    parts: [
      {
        name: "Fundamentals of React",
        exercises: 10
      },
      {
        name: "Using props to pass data",
        exercises: 7
      },
      {
        name: "State of a component",
        exercises: 14
      }]
}

  const author = {
    name: "Alex",
    age: 32
  }

  return (
    <div>
      <Hello author={author}/>
      <Header courseName={course.name}/>
      <Content parts={course.parts}/>
      <Total parts={course.parts}/>
      <Counter />      
    </div>
  )
  
}

ReactDOM.render(<App />, document.getElementById('root'))