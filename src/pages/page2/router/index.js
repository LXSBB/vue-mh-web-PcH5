import Vue from 'vue';
import Router from 'vue-router';

Vue.use(Router);

const _import = require('./_import_' + process.env.NODE_ENV);
const router = new Router({
  mode: 'history',
  routes: [
    {
      path: '/page2_pc',
      name: 'page2_pc',
      component: _import('page2_pc')
    },
    {
      path: '/page2_h5',
      name: 'page2_h5',
      component: _import('page2_h5')
    }
  ]
});

export default router;
