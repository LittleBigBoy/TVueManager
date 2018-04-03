import Vue from 'vue'
import Router from 'vue-router'
const _import = require('./_import_' + process.env.NODE_ENV)
//在开发环境下不使用懒加载（lazy-loading）,懒加载太多的页面会导致webpack热更新很慢。正式环境使用懒加载
Vue.use(Router)

/* Layout */
import Layout from '../views/layout/Layout'

/** 只有子菜单的子项多于一个才会出现 */
/**
 * hidden: true                     如果hidden:true 将不会在侧边栏出现，默认为false
 * alwaysShow: true                 如果设置为true，将会一直出现在根菜单，无论他的子路由的多少
 *                                  如果不设置alwaysShow，只有在子路由多余一个的时候才会出现扩展模式，否则不会出现根菜单
 * redirect: noredirect             如果设置为noredirect 将不会出现在面包屑栏
 * name: 'router-name'              在<keep-alive>中使用，所以必须设置
 * meta: {
 *   roles: ['admin','editor' ]     控制页面权限，可以设置多个角色
 *   title: 'title'                 出现在菜单和面包屑中，建议设置
 *   icon: 'svg-name'               icon出现在侧边栏
 *   noCache: true                  如果true，页面将不会被缓存，默认为false
 * }
 */

export const constantRouterMap = [
  { path: '/login', component: _import('login/index'), hidden: true },
  {
    path: '',
    component: Layout,
    redirect: 'dashboard',
    children: [
      {
        path: 'dashboard',
        component: _import('dashboard/index'),
        name: 'dashboard',
        meta: {
          title: 'dashboard',
          icon: 'dashboard',
          noCache: true
        }
      }
    ]
  },
  {
    path: '/ordermanage',
    component: Layout,
    redirect: 'noredirect',
    meta: {
      title: 'ordermanage',
      icon: 'ordermanage'
    },
    children: [{
      path: 'orderList', component: _import('ordermanage/orderList'), name: 'orderList', meta: { title: 'orderList' }
    }]
  }
]

export default new Router({
  scrollBehavior: () => ({ y: 0 }),
  routes: constantRouterMap
})


export const asyncRouterMap = [
  {
    path: '/permission',
    component: Layout,
    redirect: '/permission/index',
    meta: { roles: ['admin'] }, // you can set roles in root nav
    children: [{
      path: 'index',
      component: _import('permission/index'),
      name: 'permission',
      meta: {
        title: 'permission',
        icon: 'lock',
        roles: ['admin'] // or you can only set roles in sub nav
      }
    }]
  },
  {
    path: '/icon',
    component: Layout,
    children: [{
      path: 'index',
      component: _import('svg-icons/index'),
      name: 'icons',
      meta: { title: 'icons', icon: 'icon', noCache: true }
    }]
  }
]

