import Vue from 'vue';
import router from './router';
import Index from './index.vue';
import components from '../../components';
import api from '../../api';
import '../../styles/common.less';
import Meta from "vue-meta"
import "@/assets/common"

Vue.use(Meta)
Vue.prototype.$api = api;
Vue.config.productionTip = false

Object.keys(components).forEach(key => {
  Vue.component(key, components[key]);
});

new Vue({
  router,
  render: h => h(Index)
}).$mount('#app');
