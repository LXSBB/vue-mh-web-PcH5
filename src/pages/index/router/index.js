import Vue from 'vue';
import Router from 'vue-router';
Vue.use(Router);

const _import = require('./_import_' + process.env.NODE_ENV);
const router = new Router({
  mode: 'history',
  routes: [
    {
      path:'/index',
      redirect:'/index_pc'
    },
    {
      path: '/index_pc',
      name: 'index_pc',
      component: _import('index_pc')
    },
    {
      path: '/index_h5',
      name: 'index_h5',
      component: _import('index_h5')
    }
  ]
});

export default router;
