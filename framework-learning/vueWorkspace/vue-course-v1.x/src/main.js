import Vue from 'vue'
import VueRouter from 'vue-router'
import ConfigRouter from './router'
import App from './App.vue'

Vue.config.devtools = true

Vue.use(VueRouter)

var router = new VueRouter()

ConfigRouter(router)

router.beforeEach(function () {
  window.scrollTo(0, 0)
})

router.redirect({
  '*': '/'
})

router.start(App, '#root')
