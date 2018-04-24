import { loginByUsername, getUserInfo, loginOut } from '@/api/login'
import { getToken, setToken, removeToken } from '@/utils/auth'
import { Message } from 'element-ui';

const user = {
    state: {
        avater: '',
        username: getToken('username'),
        adminToken: getToken('adminToken'),
        timestamp: getToken('timestamp'),
        nickname: '',
        roles: []
    },
    mutations: {
        SET_AVATAR: (state, avater) => {
            state.avater = avater
        },
        SET_USERNAME: (state, username) => {
            state.username = username
        },
        SET_ADMINTOKEN: (state, admintoken) => {
            state.adminToken = admintoken
        },
        SET_TIMESTAMP: (state, timestamp) => {
            state.timestamp = timestamp
        },
        SET_ROLES: (state, roles) => {
            state.roles = roles
        },
        SET_NICKNAME: (state, nickname) => {
            state.nickname = nickname
        }
    },
    actions: {

        LoginByUsername({ commit }, LoginForm) {
            const username = LoginForm.username.trim()
            const password = LoginForm.password
            const timestamp = LoginForm.timestamp
            return new Promise((resolve, reject) => {
                loginByUsername(username, password, timestamp).then(response => {
                    const data = response.Data
                    commit('SET_ADMINTOKEN', data)
                    setToken('adminToken', data)
                    commit('SET_USERNAME', username)
                    setToken('username', username)
                    commit('SET_TIMESTAMP', timestamp)
                    setToken('timestamp', timestamp)
                    resolve()
                }).catch(error => {
                    console.log(error)
                    reject(error)
                })
            })
        },

        GetUserInfo({ commit, state }) {
            return new Promise((resolve, reject) => {
                getUserInfo(state.username).then(response => {
                    if (response.StatusCode !== 200) {
                        reject('error')
                    }
                    const obj = JSON.parse(response.Data)
                    commit('SET_ROLES', obj.Roles)
                    commit('SET_NICKNAME', obj.NickName)
                    resolve(obj)
                }).catch(error => {
                    console.log(error)
                    reject(error)
                })
            })
        },

        LoginOut({ commit, state }) {
            return new Promise((resolve, reject) => {
                loginOut(state.username).then(response => {
                    if (response.StatusCode != 200) {
                        reject('error')
                    } else {
                        commit('SET_USERNAME', '')
                        removeToken('username')
                        commit('SET_TIMESTAMP', '')
                        removeToken('timestamp')
                        commit('SET_ADMINTOKEN', '')
                        removeToken('adminToken')
                        resolve()  
                    }
                })
            })
        }
    }
}

export default user