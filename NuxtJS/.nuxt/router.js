import Vue from 'vue'
import Router from 'vue-router'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _f1cf6462 = () => interopDefault(import('../pages/indexvuetify.vue' /* webpackChunkName: "pages/indexvuetify" */))
const _30dfd0b8 = () => interopDefault(import('../pages/user/login.vue' /* webpackChunkName: "pages/user/login" */))
const _382b4ecb = () => interopDefault(import('../pages/user/logout.vue' /* webpackChunkName: "pages/user/logout" */))
const _28768a66 = () => interopDefault(import('../pages/user/my-account.vue' /* webpackChunkName: "pages/user/my-account" */))
const _4bf2ed24 = () => interopDefault(import('../pages/user/register.vue' /* webpackChunkName: "pages/user/register" */))
const _a2a5ba7e = () => interopDefault(import('../pages/user/adm/dashboard/index.vue' /* webpackChunkName: "pages/user/adm/dashboard/index" */))
const _381b6f09 = () => interopDefault(import('../pages/user/adm/dashboard/inspire.vue' /* webpackChunkName: "pages/user/adm/dashboard/inspire" */))
const _692bc90e = () => interopDefault(import('../pages/user/adm/dashboard/inspire2.vue' /* webpackChunkName: "pages/user/adm/dashboard/inspire2" */))
const _39f0e954 = () => interopDefault(import('../pages/user/adm/dashboard/welcome/index.vue' /* webpackChunkName: "pages/user/adm/dashboard/welcome/index" */))
const _7495a50f = () => interopDefault(import('../pages/index.vue' /* webpackChunkName: "pages/index" */))

// TODO: remove in Nuxt 3
const emptyFn = () => {}
const originalPush = Router.prototype.push
Router.prototype.push = function push (location, onComplete = emptyFn, onAbort) {
  return originalPush.call(this, location, onComplete, onAbort)
}

Vue.use(Router)

export const routerOptions = {
  mode: 'history',
  base: decodeURI('/'),
  linkActiveClass: 'nuxt-link-active',
  linkExactActiveClass: 'nuxt-link-exact-active',
  scrollBehavior,

  routes: [{
    path: "/indexvuetify",
    component: _f1cf6462,
    name: "indexvuetify"
  }, {
    path: "/user/login",
    component: _30dfd0b8,
    name: "user-login"
  }, {
    path: "/user/logout",
    component: _382b4ecb,
    name: "user-logout"
  }, {
    path: "/user/my-account",
    component: _28768a66,
    name: "user-my-account"
  }, {
    path: "/user/register",
    component: _4bf2ed24,
    name: "user-register"
  }, {
    path: "/user/adm/dashboard",
    component: _a2a5ba7e,
    name: "user-adm-dashboard"
  }, {
    path: "/user/adm/dashboard/inspire",
    component: _381b6f09,
    name: "user-adm-dashboard-inspire"
  }, {
    path: "/user/adm/dashboard/inspire2",
    component: _692bc90e,
    name: "user-adm-dashboard-inspire2"
  }, {
    path: "/user/adm/dashboard/welcome",
    component: _39f0e954,
    name: "user-adm-dashboard-welcome"
  }, {
    path: "/",
    component: _7495a50f,
    name: "index"
  }],

  fallback: false
}

export function createRouter () {
  return new Router(routerOptions)
}
