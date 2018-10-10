import Vue from 'vue';
import MintUI from 'mint-ui';
import Vant from 'vant';
import FastClick from 'fastclick';
import VueI18n from 'vue-i18n';
import router from './router';
import store from './store';
import components from './components';
import filters from './filters';
import directs from './directive';
import App from './App';
import { spread, browser } from './utils';

if (window.htp.mock) {
  require('./mock');
}

Vue.use(MintUI);
Vue.use(Vant);
Vue.use(VueI18n);

Vue.prototype.toast = MintUI.Toast;

Vue.prototype.spread = spread;

if ('addEventListener' in document) {
  document.addEventListener(
    'fastclick',
    () => {
      FastClick.attach(document.body);
    },
    false
  );
}

Object.keys(components).forEach(key => {
  var name = key.replace(/(\w)/, v => v.toUpperCase());
  Vue.component(`v${name}`, components[key]);
});

function start() {
  new Vue({
    data: {
      eventHub: new Vue() //事件中心
    },
    store,
    router,
    render: h => h(App)
  }).$mount('#app');
}

if (location.href.indexOf('from=wechat') == -1) {
  if (location.href.split('#')[0].indexOf('?') == -1) {
    window.location.href = location.href.split('#')[0] + '?from=wechat#' + location.href.split('#')[1];
  } else {
    window.location.href = location.href.split('#')[0] + '&from=wechat#' + location.href.split('#')[1];
  }
} else {
  if (browser().isWeixin) {
    //2.没有userId，有code时进行授权登录
    if (!store.getters.userId && window.location.href.match(/code=[\w]{32}/, 'g')) {
      store
        .dispatch('ajax', {
          name: 'wxLogin',
          data: {
            code: window.location.href.match(/code=([\w]{32})/, 'g')[1]
          }
        })
        .then(res => {
          res.userId = res.user_id;
          store.commit('setUserInfo', res);
          window.localStorage.setItem('accpet', 'cckamei');
          //3.去掉code参数,防止直接复制链接出去带上旧的code
          window.location.href = window.location.href.replace(/[&?]code=[\w]{32}/, '');
          start();
        });
    } else if (!store.getters.userId) {
      let sco = window.localStorage.getItem('accpet') ? 'snsapi_base' : 'snsapi_userinfo';

      //1.没有userId 没有code时进行授权
      if (window.htp.iswxproxy) {
        window.location.href = window.htp.wxproxy + '?appid=' + window.htp.appid + '&redirect_uri=' + encodeURIComponent(window.location.href) + '&response_type=code&scope=' + sco + '&state=STATE#wechat_redirect';
      } else {
        window.location.href = 'https://open.weixin.qq.com/connect/oauth2/authorize?appid=' + window.htp.appid + '&redirect_uri=' + encodeURIComponent(window.location.href) + '&response_type=code&scope=' + sco + '&state=STATE#wechat_redirect';
      }
    } else {
      start();
    }
  } else {
    start();
  }
}
