import Vue from 'vue';
import VueRouter from 'vue-router';
import routes from './routes';
import store from '../store';
import { browser } from '../utils';

Vue.use(VueRouter);

const router = new VueRouter({
  mode: 'hash',
  linkActiveClass: 'is-active',
  routes
});

router.beforeEach((to, from, next) => {
  let metas = to.meta;

  function skip(metas) {
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
  }

  //解决messagebox在切换路由时不取消的bug
  if (document.querySelector('.mint-msgbox-cancel')) {
    document.querySelector('.mint-msgbox-cancel').click();
  }

  if (browser().isWeixin) {
    store
      .dispatch('ajax', {
        name: 'getWxSign',
        data: {
          url: encodeURIComponent(window.location.href.split('#')[0].split('&')[0])
        }
      })
      .then(res => {
        window.wx.config({
          debug: false,
          appId: window.htp.appid,
          timestamp: res.timestamp,
          nonceStr: res.nonce,
          signature: res.sign,
          jsApiList: window.htp.wxconfig
        });

        window.wx.ready(function() {
          window.wx && window.wx.hideOptionMenu && window.wx.hideOptionMenu();
          skip(metas);
        });
      });
  } else {
    skip(metas);
  }
});

router.afterEach(() => {});

export default router;
