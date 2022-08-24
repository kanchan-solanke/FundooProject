import axios from 'axios'

let headersConfig =  {
    headers: {
        Authorization:`Bearer ${localStorage.getItem("Token")} `
    }
}

export const getNotes = () =>{
    let response = axios.get("http://localhost:4000/api/v1/notes/allNotes", headersConfig)
    return response
}

export const addNote = (obj) =>{
    let response = axios.post("http://localhost:4000/api/v1/notes",obj, headersConfig)
    return response
}

export const editNote = (obj,id) =>{
    let response = axios.put(` http://localhost:4000/api/v1/notes/${id}`,obj, headersConfig)
    return response
}

export const updateNote = (id) =>{
    let response = axios.put(`http://localhost:4000/api/v1/notes/${id}/isArchieve`,null, headersConfig)
    return response
}

export const delNote = (id) =>{
    let response = axios.delete(`http://localhost:4000/api/v1/notes/${id}`, headersConfig)
    return response
}



