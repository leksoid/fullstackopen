import React from 'react'

const PersonForm = (props) => {
    return (
        <form id='addPersonForm' onSubmit={props.addPerson}>
        <div>
          name: <input id='nameField' value={props.newName} onChange={props.handleNameChange} autoComplete="off"/>
        </div>
        <div>
          phone number: <input id='numberField' value={props.newPhone} onChange={props.handlePhoneChange} autoComplete="off"/>
        </div>
        <div>
          <button id='submitForm' type='submit'>add</button>
        </div>
      </form>
    )
}

export default PersonForm