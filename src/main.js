import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import vuetify from './plugins/vuetify'

const moment = require('moment')
require('moment/locale/tr')

import '@mdi/font/css/materialdesignicons.css'
import 'material-design-icons-iconfont/dist/material-design-icons.css'
import "./assets/style.css"
import './registerServiceWorker'

import { routeNames } from './router/routes'
import { storage } from './storage'

Vue.config.productionTip = false
Vue.prototype.$routeNames = routeNames
Vue.prototype.$storage = storage

Vue.use(require('vue-moment'), { moment })
new Vue({
  router,
  store,
  vuetify,
  render: h => h(App)
}).$mount('#app')
