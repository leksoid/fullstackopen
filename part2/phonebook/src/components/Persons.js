import React from 'react'

const Persons = ({filter, persons}) => {

    const filteredList = filter.length === 0 ? 
        persons : persons.filter(person => 
            person.name.toLowerCase().includes(filter.toLowerCase())) 

    return (
        <ul>
            {filteredList.map(person=><li key={person.id}>{person.name}: {person.phone}</li>)}
        </ul>
    )
}

export default Persons