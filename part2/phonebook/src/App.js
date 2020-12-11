import React, { useState } from 'react'
import Filter from './components/Filter'
import Persons from './components/Persons'
import PersonForm from './components/PersonForm'

const App = () => {
  const [persons, setPersons] = useState([])
  const [newName, setNewName] = useState('')
  const [newPhone, setNewPhone] = useState('')
  const [filter, setFilter] = useState('')

  const addPerson = (event)=> {
    if (persons.some(el=> el.name === newName)) {
      window.alert(`${newName} already exists`)
      event.preventDefault()
      return
    }
    event.preventDefault()

    const nameObj = {
      name: newName,
      date: new Date().toDateString(),
      id: persons.length + 1,
      phone: newPhone
    }

    setPersons(persons.concat(nameObj))
    setNewName('')
    setNewPhone('')
  }

  const handleNameChange = (event)=> {
    setNewName(event.target.value)
  }

  const handlePhoneChange = (event)=> {
    setNewPhone(event.target.value)
  }

  const handleFilterChange = (event) => {
    setFilter(event.target.value)
  }

  return (
    <div>
      <h2>Phonebook</h2>
      <Filter handleFilterChange={handleFilterChange} filter={filter} />
      <h3>Add a new entry</h3>
      <PersonForm addPerson={addPerson} newName={newName} newPhone={newPhone} handleNameChange={handleNameChange} handlePhoneChange={handlePhoneChange}/>
      <h2>Numbers</h2>
      <Persons persons={persons} filter={filter} />
    </div>
    
  )
}

export default App;
