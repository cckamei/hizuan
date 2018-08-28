let api = {
  authCode: { url: 'api/v1/vcode', method: 'get', cache: false }, //获取短信验证码
  register: { url: 'api/v1/register', cache: false }, //手机号注册
  login: { url: 'api/v1/login', cache: false }, //手机号登陆
  forget: { url: 'api/v1/forget_password', cache: false }, //修改密码
  index: { url: 'api/v1/preset', cache: false } //首页接口
};

for (var k in api) {
  let urlHost = window.htp.apihost;
  let url = api[k].url;

  if (process.env.NODE_ENV === 'development') {
    urlHost = '/proxy/';
  }
  api[k].url = urlHost + url;
}

export default api;
