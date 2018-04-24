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

export function loginOut(userName) {
    return request({
        url: 'api/Account/loginout',
        method: 'post',
        params: { userName }
    })
}

export function getUserInfo(userName) {
    const params = { userName }
    return request({
        url: 'api/Account/getuserinfo',
        method: 'get',
        params
    })
}