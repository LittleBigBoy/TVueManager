import request from '@/utils/request'

export function loginByUsername(userName, passWord, timestamp) {
    const params = {
        userName,
        passWord,
        timestamp,
        remeberMe: false,
        returnUrl: ''
    }

    return request({
        url: 'api/Account/loginon',
        method: 'post',
        params
    })
}