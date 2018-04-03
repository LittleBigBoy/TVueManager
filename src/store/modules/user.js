

const user = {
    state: {
        avater: '',
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
        }
    }
}

export default user