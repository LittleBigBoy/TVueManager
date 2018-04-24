import Cookies from 'js-cookie'

export function getToken(TokenKey) {
    return Cookies.get(TokenKey)
}

export function setToken(TokenName,token) {
    return Cookies.set(TokenName, token)
}

export function removeToken(TokenKey) {
    return Cookies.remove(TokenKey)
}