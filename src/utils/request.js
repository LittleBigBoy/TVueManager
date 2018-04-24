import axios from 'axios'
import { Message } from 'element-ui'
import store from '@/store'
import { getToken } from '@/utils/auth'

// create an axios instance
const service = axios.create({
    baseURL: process.env.BASE_API,
    timeout: 5000
})

// request interceptor
service.interceptors.request.use(config => {
    if (store.getters.username && store.getters.adminToken && store.getters.timestamp) {
        config.headers['username'] = store.getters.username
        config.headers['adminToken'] = store.getters.adminToken
        config.headers['timestamp'] = store.getters.timestamp
    }
    return config
},
    error => {
        console.log(error)
        Promise.reject(error)
    })

// response interceptor
service.interceptors.response.use(response => {
    const res = response.data
    console.log(res)
    if (res.StatusCode !== 200) {
        Message({
            message: res.Info,
            type: 'error',
            duration: 5 * 1000
        })
        return Promise.reject('error')
    }
    return response.data

},
    error => {
        console.log(error)
        Message({
            message: error.message,
            type: 'error',
            duration: 5 * 1000
        })
        return Promise.reject(error)
    }
)
export default service