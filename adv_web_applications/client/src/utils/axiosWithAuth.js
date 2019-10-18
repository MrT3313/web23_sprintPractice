// IMPORT 
import axios from 'axios'

// Function
function axiosWithAuth() {
    const token = localStorage.getItem('token')

    return axios.create({
        baseURL: 'http://localhost:5000/',
        headers: {
            authorization: `${token}` 
        }
    })
}

// EXPORT
export default axiosWithAuth
