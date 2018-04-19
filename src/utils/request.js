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
    if (store.getters.staffid && store.getters.adminToken && store.getters.timestamp) {
        config.headers['staffid'] = store.getters.staffid
        config.headers['adminToken'] = store.getters.adminToken
        config.headers['timestamp'] = stroe.getters.timestamp
    }
    return config
},
    error => {
        console.log(error)
        Promise.reject(error)
    })

// response interceptor
service.interceptors.response.use(response => {
    const res = response.data;
    console.log(res);
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