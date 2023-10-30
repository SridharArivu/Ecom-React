import axios from 'axios';


const Axios = axios.create({
    baseURL: 'http://localhost:8080',
    // baseURL: 'https://6bd5-2409-40f4-27-909a-38dd-e6a-54b5-4bd3.ngrok-free.app', 
    headers: {
      'Content-Type': 'application/json',
      
    },
      withCredentials: true
})


export default Axios;


