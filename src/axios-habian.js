import axios from 'axios'

const instance = axios.create({
  baseURL: 'http://192.168.1.69:8080/rest'
})

export default instance
