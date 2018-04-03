const getters = {
    avatar: state => state.user.avatar,
    sidebar: state => state.app.sidebar,
    language: state => state.app.language,
    visitedViews: state => state.tagsView.visitedViews,
    cachedViews: state => state.tagsView.cachedViews,
    permission_routers: state => state.permission.routers,
    addRouters: state => state.permission.addRouters,
    roles: state => state.user.roles
}
export default getters