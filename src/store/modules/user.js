const user = {
    state: {
        avater: ''
    },
    mutations: {
        SET_AVATAR: (state, avater) => {
            state.avater = avater
        }
    },
    actions: {
        setAvater({ commit }, avater) {
            commit('SET_AVATAR', avater)
        }
    }
}

export default user