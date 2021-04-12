import Vue from 'vue';
import router from './router';
import Page1 from './page1.vue';
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
  render: h => h(Page1)
}).$mount('#page1');
