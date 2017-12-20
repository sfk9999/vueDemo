// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import Hello from './components/Hello.vue'
import HelloWorld from './components/HelloWorld.vue'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'

import VueRouter from 'vue-router'
import VueResource from 'vue-resource'

Vue.use(VueRouter)
Vue.use(VueResource)
Vue.use(ElementUI)

Vue.config.productionTip = false

//路由
const router = new VueRouter({
  mode:'history', //依赖 HTML5 History API 和服务器配置
  base: __dirname,
  routes:[
    {
      path:'/hello',
      component:Hello
    },
    {
      path:'/helloword',
      component:HelloWorld
    }
  ]
})


/* eslint-disable no-new */
new Vue({
  el: '#app',
  //别忘了
  router: router,
  template: '<App/>',
  components: { App }
})
