import Vue from 'vue'
import Router from 'vue-router'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _00297813 = () => interopDefault(import('../pages/articles/index.vue' /* webpackChunkName: "pages/articles/index" */))
const _1c3b70e0 = () => interopDefault(import('../pages/contact/index.vue' /* webpackChunkName: "pages/contact/index" */))
const _f1cf6462 = () => interopDefault(import('../pages/indexvuetify.vue' /* webpackChunkName: "pages/indexvuetify" */))
const _5508524e = () => interopDefault(import('../pages/over-ons.vue' /* webpackChunkName: "pages/over-ons" */))
const _03b2bf3f = () => interopDefault(import('../pages/projecten.vue' /* webpackChunkName: "pages/projecten" */))
const _73109ea2 = () => interopDefault(import('../pages/articles/add.vue' /* webpackChunkName: "pages/articles/add" */))
const _478ee4ba = () => interopDefault(import('../pages/contact/chat.vue' /* webpackChunkName: "pages/contact/chat" */))
const _437ff5df = () => interopDefault(import('../pages/dev/containers.vue' /* webpackChunkName: "pages/dev/containers" */))
const _30dfd0b8 = () => interopDefault(import('../pages/user/login.vue' /* webpackChunkName: "pages/user/login" */))
const _382b4ecb = () => interopDefault(import('../pages/user/logout.vue' /* webpackChunkName: "pages/user/logout" */))
const _28768a66 = () => interopDefault(import('../pages/user/my-account.vue' /* webpackChunkName: "pages/user/my-account" */))
const _4bf2ed24 = () => interopDefault(import('../pages/user/register.vue' /* webpackChunkName: "pages/user/register" */))
const _a2a5ba7e = () => interopDefault(import('../pages/user/adm/dashboard/index.vue' /* webpackChunkName: "pages/user/adm/dashboard/index" */))
const _381b6f09 = () => interopDefault(import('../pages/user/adm/dashboard/inspire.vue' /* webpackChunkName: "pages/user/adm/dashboard/inspire" */))
const _692bc90e = () => interopDefault(import('../pages/user/adm/dashboard/inspire2.vue' /* webpackChunkName: "pages/user/adm/dashboard/inspire2" */))
const _39f0e954 = () => interopDefault(import('../pages/user/adm/dashboard/welcome/index.vue' /* webpackChunkName: "pages/user/adm/dashboard/welcome/index" */))
const _52db5d04 = () => interopDefault(import('../pages/articles/_id/index.vue' /* webpackChunkName: "pages/articles/_id/index" */))
const _7fa7db66 = () => interopDefault(import('../pages/articles/_id/update.vue' /* webpackChunkName: "pages/articles/_id/update" */))
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
    path: "/articles",
    component: _00297813,
    name: "articles"
  }, {
    path: "/contact",
    component: _1c3b70e0,
    name: "contact"
  }, {
    path: "/indexvuetify",
    component: _f1cf6462,
    name: "indexvuetify"
  }, {
    path: "/over-ons",
    component: _5508524e,
    name: "over-ons"
  }, {
    path: "/projecten",
    component: _03b2bf3f,
    name: "projecten"
  }, {
    path: "/articles/add",
    component: _73109ea2,
    name: "articles-add"
  }, {
    path: "/contact/chat",
    component: _478ee4ba,
    name: "contact-chat"
  }, {
    path: "/dev/containers",
    component: _437ff5df,
    name: "dev-containers"
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
    path: "/articles/:id",
    component: _52db5d04,
    name: "articles-id"
  }, {
    path: "/articles/:id/update",
    component: _7fa7db66,
    name: "articles-id-update"
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
