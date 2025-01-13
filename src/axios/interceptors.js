import axios from "axios";


const authFetch = axios.create({
    baseURL: 'https://course-api.com',
    headers: {
        Accept: 'application/json'
    }
})

authFetch.interceptors.request.use(
    (req) => {
        req.headers.common['Accept'] = 'application/json';
        console.log('sending request')
        return req
    }, (err) => Promise.reject(err)
)

authFetch.interceptors.response.use(
    (res) => {
        console.log('Got response')
        return res
    },
    
    (err) => {
        console.log('From interceptor: ', err.response)
        
        if (err.response && err.response.status === 404) {
            console.log('not found')
        } else {
            console.log('some other error')
        }

        return Promise.reject(err)
    }
)

export default authFetch