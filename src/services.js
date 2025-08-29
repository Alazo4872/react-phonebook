import axios from "axios"
const url = 'http://localhost:3001/persons'

const getAll = () => {
    const request = axios.get(url)
    return request.then(response => response.data)
}

const create = (object) => {
    const request = axios.post(url, object)
    return request.then(response => response.data)
}
const remove = (id) => {
    if(window.confirm("Are you sure you want to delete this entry?")){
        const request = axios.delete(`${url}/${id}`) 
        return request.then(response => response.data) 
    }
    else{
        return Promise.resolve() // Return a resolved promise if deletion is cancelled
    }
}
const update = (id, newObject) => {
    const request = axios.put(`${url}/${id}`, newObject)
    return request.then(response => response.data)
}



export default {getAll, create, remove, update}