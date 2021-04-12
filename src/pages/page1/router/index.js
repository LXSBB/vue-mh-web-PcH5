import Vue from 'vue';
import Router from 'vue-router';

Vue.use(Router);

const _import = require('./_import_' + process.env.NODE_ENV);
const router = new Router({
  mode: 'history',
  routes: [
    {
      path: '/page1_pc',
      name: 'page1_pc',
      component: _import('page1_pc')
    },
    {
      path: '/page1_h5',
      name: 'page1_h5',
      component: _import('page1_h5')
    }
  ]
});

export default router;
