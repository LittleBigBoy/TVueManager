const user = {
    state: {
        avater: 'https://wpimg.wallstcn.com/f778738c-e4f8-4870-b634-56703b4acafe.gif'
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