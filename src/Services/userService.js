import axios from 'axios'

export const signUp =(obj) =>{
let response = axios.post("http://localhost:4000/api/v1/users",obj)
console.log(response)
 return response
}

export const signIn =(obj) =>{
    let response = axios.post("http://localhost:4000/api/v1/users/login",obj)
console.log(response)
 return response
}