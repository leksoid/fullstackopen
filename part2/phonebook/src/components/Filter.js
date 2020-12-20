import React from 'react'

const Filter = ({filter, handleFilterChange}) => {
    return (
        <div>
            Search: <input id='search' value={filter} onChange={handleFilterChange} autoComplete="off"/>
        </div>
    )
}

export default Filter
