import axios from 'axios'

const apilocal = axios.create({
    baseURL: 'http://localhost:3334'
})
export {apilocal}