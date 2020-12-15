import React, { useEffect, useState } from 'react'
import Filter from './components/Filter'
import Persons from './components/Persons'
import PersonForm from './components/PersonForm'
import personsService from './services/personsService' 

const App = () => {
  const [persons, setPersons] = useState([])
  const [newName, setNewName] = useState('')
  const [newPhone, setNewPhone] = useState('')
  const [filter, setFilter] = useState('')

  const addPerson = (event)=> {
    const nameObj = {
      name: newName,
      date: new Date().toDateString(),
      id: persons.reduce((start,current)=> start.id > current.id ? start : current).id + 1,
      phone: newPhone
    }

    if (persons.some(el=> el.name === newName)) {
      if (window.confirm(`${newName} already exists, do you want to update the phone number?`)) {
        event.preventDefault()
        const updated = persons.find(p=> p.name === newName)
        const updObj = {...updated, phone: newPhone}
        personsService.updatePerson(updated.id, updObj).then(response => {
          console.log(response)
          setPersons(persons.map(p => p.name !== newName ? p : response.data))
          setNewName('')
          setNewPhone('')
        })
      }
      return
    }
    event.preventDefault()
    personsService.addPerson(nameObj).then(response => {
      setPersons(persons.concat(response.data))
        setNewName('')
        setNewPhone('')
    })
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

  useEffect(()=>{
    personsService.getAll().then(response => {
      setPersons(response.data)
    })
  }, [])

  const handleDelete = (id) => {
    if (window.confirm(`Do you want to delete ${persons.find(p => p.id === id).name}?`)) {
      personsService.deletePerson(id).then(response => {
        setPersons(persons.filter(person => person.id != id))
      })
    }
  }

  return (
    <div>
      <h2>Phonebook</h2>
      <Filter handleFilterChange={handleFilterChange} filter={filter} />
      <h3>Add a new entry</h3>
      <PersonForm addPerson={addPerson} newName={newName} newPhone={newPhone} handleNameChange={handleNameChange} handlePhoneChange={handlePhoneChange}/>
      <h2>Contacts</h2>
      <Persons persons={persons} filter={filter} handleDelete={handleDelete}/>
    </div>
    
  )
}

export default App;
