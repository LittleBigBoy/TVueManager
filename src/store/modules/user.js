import { loginByUsername } from '@/api/login'
import { getToken, setToken, removeToken } from '@/utils/auth'

const user = {
    state: {
        avater: '',
        staffid: getToken('staffid'),
        adminToken: getToken('adminToken'),
        timestamp: getToken('timestamp'),
        roles: []
    },
    mutations: {
        SET_AVATAR: (state, avater) => {
            state.avater = avater
        },
        SET_STAFFID: (state, staffid) => {
            state.staffid = staffid
        },
        SET_ADMINTOKEN: (state, admintoken) => {
            state.adminToken = admintoken
        },
        SET_TIMESTAMP: (state, timestamp) => {
            state.timestamp = timestamp
        },
        SET_ROLES: (state, roles) => {
            state.roles = roles
        }
    },
    actions: {
        setAvater({ commit }, avater) {
            commit('SET_AVATAR', avater)
        },
        ChangeRoles({ commit }, role) {
            return new Promise(resolve => {
                commit('SET_ROLES', role)
                resolve()
            })
        },
        LoginByUsername({ commit }, LoginForm) {
            const username = LoginForm.username.trim()
            const password = LoginForm.password
            const timestamp = LoginForm.timestamp
            return new Promise((resolve, reject) => {
                loginByUsername(username, password, timestamp).then(response => {
                    const data = response.data
                    commit('SET_ADMINTOKEN', data)
                    setToken('adminToken', data)
                    resolve()
                }).catch(error => {
                    console.log(error)
                    reject(error)
                })
            })
        }
    }
}

export default user