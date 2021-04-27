import axios from "axios";

const baseUrl = 'http://localhost:3001/anecdotes'

const getAll =async () => {
    let response = await axios.get(baseUrl)
    return response.data

}

const postAnecdote = async (obj) => {
    let response = await axios.post(baseUrl, obj)
    return response.data
}

const update = async (id,obj) => {
    let response = await axios.put(`${baseUrl}/${id}`, obj)
    return response.data
}

const DeleteOne = async (id) => {
    let response = await axios.delete(`${baseUrl}/${id}`)
    return response
}

const Service = {
    getAll,
    postAnecdote,
    update,
    DeleteOne
}



export default Service