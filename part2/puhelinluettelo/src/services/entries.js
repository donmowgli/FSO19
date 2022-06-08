import axios from 'axios'
const baseUrl = 'http://localhost:3001/api/persons'

const getAll = async () => {
    const request = axios.get(baseUrl)
    const response = await request
    return response.data
}

const create = async (newObject) => {
    const request = axios.post(baseUrl, newObject)
        .catch(error => {
            throw new Error(`${error.response.status}: ${error.response.data.error}`)
        })
    const response = await request
    return response.data
}

const update = async (id, newObject) => {
    const request = axios.put(`${baseUrl}/${id}`, newObject)
        .catch(error => {
            throw new Error(`${error.response.status}: ${error.response.data.error}`)
        })
    const response = await request
    return response.data
}

const remove = async (id) => {
    const request = axios.delete(`${baseUrl}/${id}`)
        .catch(error => {
            throw new Error(`${error.response.status}: ${error.response.data.error}`)
        })
    const response = await request
    return response.data
}

const entryService = { getAll, create, update, remove }

export default entryService;