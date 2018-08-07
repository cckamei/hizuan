let api = {
  // getDeviceInfo: { url: 'getDeviceInfo', cache: false },
  // getPortSize: { url: 'getPortSize', cache: false },
  // getHJYHost: { url: 'api/v1/users', cache: false },
  // topic: { url: 'api/v2/topics', cache: false },
  authCode: { url: 'api/v1/vcode', cache: false }, //获取短信验证码 /api/v1/vcode?action={action}&phone={yourphone}
  topic: { url: 'api/v2/topics', cache: false } //手机号注册用户
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
