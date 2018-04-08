import router from './router'
import store from './store'
import { Message } from 'element-ui'
import NProgress from 'nprogress'
import 'nprogress/nprogress.css'
import { getToken } from '@/utils/auth'

NProgress.configure({ showSpinner: false }) //配置NProgress，禁用进度环

/**
 * roles中的某一个角色是否存在与permissionRoles
 * @param roles 
 * @param permissionRoles
*/
function hasPermission(roles, permissionRoles) {
    if (roles.indexOf('admin') > 0) return true
    if (!permissionRoles) return true
    return roles.some(role => permissionRoles.indexOf(role) >= 0)
}

const whiteList = ['/login']

router.beforeEach((to, from, next) => {
    NProgress.start()
    if (getToken()) {//存在token
        if (to.path === '/login') {//跳转login页面，直接跳转首页
            next({ path: '/' })
            NProgress.done()
        }
        else {
            if (store.getters.roles.length === 0) {

            }
        }
    }
    else {
        if (whiteList.indexOf(to.path) !== -1) {
            next()
        }
        else {
            next({ path: '/login' })
            NProgress.done()
        }
    }
  
})

router.afterEach(() => {
    NProgress.done()
})