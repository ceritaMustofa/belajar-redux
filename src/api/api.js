import axios from "axios";

// const axiosParams = {
//     baseURL: 'https://reqres.in'
// }

// const axiosInstance = axios.create(axiosParams)

const api = axios.create({
    baseURL: 'https://reqres.in'

})

export default api

// const api = (axios) => {
//     return {
//         get: (url, config = {}) => axios.get(url, config),
//         delete:(url, config = {}) => axios.delete(url, config),
//         post:(url, body, config = {}) => axios.post(url, body, config),
//         put:(url, body, config={}) => axios.put(url, body, config),
        
//     }
// }

// export default api(axiosInstance)
