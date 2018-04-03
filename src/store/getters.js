const getters = {
    sidebar: state => state.app.sidebar,
    language: state => state.app.language,
    visitedViews: state => state.tagsView.visitedViews,
    cachedViews: state => state.tagsView.cachedViews,
    avatar: state => state.user.avatar,
    permission_routers: state => state.permission.routers,
    addRouters: state => state.permission.addRouters,
    
}
export default getters