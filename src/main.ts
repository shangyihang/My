/*
 * @Author: [shangze]
 * @Date: 2023-10-23 18:10:12
 * @LastEditors: [shangze]
 * @LastEditTime: 2023-11-01 14:06:56
 * @Description: 
 */
import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

Vue.config.productionTip = false


new Vue({
  // @ts-ignore
  router,
  store,
  render: h => h(App)
}).$mount('#app')
