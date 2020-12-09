import React from 'react';
import Part from './Part'

const Content = ({parts}) => {
    return (
      <div>
        {parts.map(part => <Part key={part.id} part={part.name} exercises={part.exercises}/>)}
        <p>Total exercises: {parts.reduce((sum,part) => sum + part.exercises, 0)}</p>
      </div>
    )
  }

export default Content