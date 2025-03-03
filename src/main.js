import Vue from 'vue'
import App from './App.vue'
import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import VueApexCharts from 'vue-apexcharts'
Vue.use(VueApexCharts)
import Notifications from 'vue-notification'

Vue.component('apexchart', VueApexCharts)
// Install BootstrapVue
Vue.use(BootstrapVue)
// Optionally install the BootstrapVue icon components plugin
Vue.use(IconsPlugin)
Vue.use(Notifications)

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
