import request from '@/utils/request'

export function loginByUsername(username, password) {
    const data = {
        username,
        password
    }
    return request({
        url: '/Account/LoginOn',
        method: 'post',
        data
    })
}