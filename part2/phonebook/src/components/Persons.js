import React from 'react'


const Persons = ({filter, persons, handleDelete}) => {

    const filteredList = filter.length === 0 ? 
        persons : persons.filter(person => 
            person.name.toLowerCase().includes(filter.toLowerCase())) 

    return (
        <ul>
            {filteredList.map(person=><li key={person.id}>{person.name}: {person.phone} <button onClick={()=>handleDelete(person.id)} >Remove</button></li>)}
        </ul>
    )
}

export default Persons