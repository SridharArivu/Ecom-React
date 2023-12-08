import axios from 'axios';


const Axios = axios.create({
    // baseURL: 'http://localhost:8080',
    baseURL: 'https://orbital-nuance-403709.el.r.appspot.com/', 
    timeout: 20000,
    headers: {
      'Content-Type': 'application/json',
      
    },
      withCredentials: true
})


export default Axios;


