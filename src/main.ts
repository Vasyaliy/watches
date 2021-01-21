import Vue from 'vue'
import App from './App.vue'
import router from './router'
import vuetify from './plugins/vuetify'
// @ts-ignore
import VueZoomer from 'vue-zoomer'
// import 'vue-zoomer/dist/vue-zoomer.css'

Vue.use(VueZoomer)

Vue.config.productionTip = false

const loading = Vue.observable({ value: false })

Vue.prototype.$loading = loading

new Vue({
  router,
  vuetify,
  render: h => h(App)
}).$mount('#app')
// генератор деклараций
