import axios from 'axios'

const API = axios.create({baseURL:'https://create-one-app.herokuapp.com/' })
// const API = axios.create({baseURL:'http://localhost:3000/' })

export const signin = (formData, history) => API.post('/signin', formData).catch((error)=> alert(error.response.data.message))
export const signup = (formData, history) => API.post('/signup', formData).catch((error)=> alert(error.response.data.message))