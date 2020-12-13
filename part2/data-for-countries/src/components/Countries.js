import React from 'react'
import Weather from './Weather'

const thousands = /\B(?=(\d{3})+(?!\d))/g

const Countries = ({filter, countries}) => {
    const filtered = countries.filter(country => 
        country.name.toLowerCase().includes(filter.toLowerCase())) 
    const mystyle = {
        border: "1px solid black",
        maxWidth: '300px'
        };
    return (
        <div>
            {
                filter.length === 0 ? 
                    <div>Please type in the search field to find a country</div>
                    : filtered.length > 1 && filtered.length < 10 ?
                    filtered.map(country => <ul><li>{country.name}</li></ul>) 
                    : filtered.length === 1 ?
                    filtered.map(country => {
                        return (
                            <div>
                                <h2>{country.name}</h2>
                                <p>Capital is: {country.capital}</p>
                                <p>Population is: {country.population.toString().replace(thousands, ",")}</p>
                                <h4>People speak here:</h4>
                                <ul>
                                    {country.languages.map(each => <li>{each.name}</li>)}
                                </ul>
                                <img src={country.flag} style={mystyle}/>
                                <div>
                                    <Weather city={country.capital} />
                                </div>
                            </div>
                        )
                    })
                    : <div>Please specify your search criteria</div>
            }
            </div>
    )
}

export default Countries