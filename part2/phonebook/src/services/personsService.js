import axios from 'axios';

const baseUrl = '/api/persons'

const getAll = () => {
    return axios.get(baseUrl)
}

const addPerson = (obj) => {
    return axios.post(baseUrl, obj)
}

const updatePerson = (id, obj) => {
    console.log(id, obj)
    return axios.put(`${baseUrl}/${id}`, obj)
}

const deletePerson = (id) => {
    return axios.delete(`${baseUrl}/${id}`)
}

export default {getAll, addPerson, updatePerson, deletePerson}