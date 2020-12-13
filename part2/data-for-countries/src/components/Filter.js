import React from 'react'

const Filter = ({filter, handleFilterChange}) => {
    return (
        <div>
            <h3>Search</h3>
            Type country name: <input id='search' value={filter} onChange={handleFilterChange} autoComplete="off"/>
        </div>
    )
}

export default Filter