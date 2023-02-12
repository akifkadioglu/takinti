import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import vuetify from './plugins/vuetify'

import 'material-design-icons-iconfont/dist/material-design-icons.css'
import "./assets/style.css"
import './registerServiceWorker'
import { routeNames } from './router/routes'

Vue.config.productionTip = false
Vue.prototype.$routeNames = routeNames
new Vue({
  router,
  store,
  vuetify,
  render: h => h(App)
}).$mount('#app')
