import logo from './logo.svg';
import './App.css';
import React, { useEffect, useState } from 'react';
import axios from 'axios';

const App = () => {
  const [notes, setNotes] = useState([])
  const [newNote, setNewNote] = useState('')
  const [showAll, setShowAll] = useState(true)

  useEffect(()=>{
    console.log("effect")
    axios.get('http://localhost:3001/notes')
      .then(response => {
        console.log("promise fullfiled")
        setNotes(response.data)
      })
  }, [])

  console.log('render', notes.length, 'notes')
  
  return (
    <div>
    </div>
  )

}

export default App;
