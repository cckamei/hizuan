import Vue from 'vue';
import VueRouter from 'vue-router';
import routes from './routes';
import store from '../store';

Vue.use(VueRouter);

const router = new VueRouter({
  mode: 'hash',
  linkActiveClass: 'is-active',
  routes
});

router.beforeEach((to, from, next) => {
  let metas = to.meta;

  if (metas && metas.params && metas.params.length) {
    metas.params.forEach(item => {
      if (item == 'token' && !store.getters.token) {
        return next({ name: 'login' });
      } else if (item == 'goodsId' && !store.getters.getCommon.goodsId) {
        return next({ name: 'goodslist' });
      }
    });
    next();
  } else {
    return next();
  }

  //解决messagebox在切换路由时不取消的bug
  if (document.querySelector('.mint-msgbox-cancel')) {
    document.querySelector('.mint-msgbox-cancel').click();
  }
  return next();
});

router.afterEach(() => {});

export default router;
