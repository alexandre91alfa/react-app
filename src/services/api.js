import axios from 'axios'

const api = axios.create({
    baseURL: 'http://192.168.100.103:3009'
})

export default api;