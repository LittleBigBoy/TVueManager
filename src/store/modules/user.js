import { getToken, setToken, removeToken } from '@/utils/auth'

const user = {
    state: {
        avater: '',
        token: getTokens(),
        roles: []
    },
    mutations: {
        SET_AVATAR: (state, avater) => {
            state.avater = avater
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
        GetTokens({ commit, state }) {

        }
    }
}

export default user