import axios from 'axios'
import { Message } from 'element-ui'
import store from '@/store'
import { getToken } from '@/utils/auth'

// create an axios instance
const service=axios.create({
    baseURL:process.env.Base_API,//api的baseurl
    timeout:5000//请求过期
})

// request interceptor 请求拦截