import Vue from 'vue'
import Element from 'element-ui'
import App from './App'
import 'element-ui/lib/theme-chalk/index.css'
import routes from './router/routes.js'
import VueRouter from 'vue-router'
import {getCookie1} from './assets/js/cookie';

Vue.use(VueRouter)
Vue.use(Element)
Vue.config.productionTip = false
const router = new VueRouter({routes})

Vue.directive('has', {
    inserted: function (el, binding) {
      if (!permissionJudge(binding.value)) {
        el.parentNode.removeChild(el);
      }
      function permissionJudge(value) {
        // 此处localStorage.getItem('permissions')代表vuex中储存的按钮菜单数据
        const permissions = localStorage.getItem('permissions');
          if (permissions.indexOf(value)>-1) {
            return true;
          }
        return false;
      }
    }
});

new Vue({
    router,
    render: h => h(App)
}).$mount('#app')
