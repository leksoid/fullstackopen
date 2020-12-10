import React, { useState } from 'react'

const App = () => {
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas', phone: '040-123456' },
    { name: 'Ada Lovelace', phone: '39-44-5323523' },
    { name: 'Dan Abramov', phone: '12-43-234345' },
    { name: 'Mary Poppendieck', phone: '39-23-6423122' }
  ])
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

  const filteredList = filter.length === 0 ? 
    persons : persons.filter(person => 
      person.name.toLowerCase().includes(filter.toLowerCase())) 

  console.log(filteredList)

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
      <div>
        Search: <input value={filter} onChange={handleFilterChange}/>
      </div>
      <form onSubmit={addPerson}>
        <div>
          name: <input value={newName} onChange={handleNameChange}/>
        </div>
        <div>
          phone number: <input value={newPhone} onChange={handlePhoneChange}/>
        </div>
        <div>
          <button type='submit'>add</button>
        </div>
      </form>
      <h2>Numbers</h2>
      <ul>
        {filteredList.map(person=><li key={person.id}>{person.name}: {person.phone}</li>)}
      </ul>
      <div>debug: {newName}</div>
    </div>
    
  )
}

export default App;
