import axios from 'axios'

const instance = axios.create({
  baseURL: 'https://react-burger-7ade1-default-rtdb.firebaseio.com/',
})

export default instance
