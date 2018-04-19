const getters = {
    avatar: state => state.user.avatar,
    sidebar: state => state.app.sidebar,
    language: state => state.app.language,
    visitedViews: state => state.tagsView.visitedViews,
    cachedViews: state => state.tagsView.cachedViews,
    permission_routers: state => state.permission.routers,
    addRouters: state => state.permission.addRouters,
    roles: state => state.user.roles,
    staffid: state => state.user.staffid,
    adminToken: state => state.user.adminToken,
    timestamp: state => state.user.timestamp
}
export default getters