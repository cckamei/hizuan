let api = {
  getWxSign: { url: 'getWxSign', method: 'get' }, //微信签名
  authCode: { url: 'api/v1/vcode', method: 'get' }, //获取短信验证码
  register: { url: 'api/v1/register' }, //手机号注册
  login: { url: 'api/v1/login' }, //手机号登陆
  forget: { url: 'api/v1/forget_password' }, //修改密码
  index: { url: 'api/v1/preset', method: 'get' }, //首页接口
  goods: { url: 'api/v1/goods', method: 'get' }, //获取商品列表
  series: { url: 'api/v1/series', method: 'get' }, //获取所有套系信息
  getCategory: { url: 'api/v1/category', method: 'get' },
  goodsDetail: { url: 'api/v1/goods/detail/:id', method: 'get' }, //获取商品详情
  cart: { url: 'api/v1/cart', method: 'get' }, //获取购物车的商品列表
  addCart: { url: 'api/v1/cart' }, //添加删除购物车
  addCollect: { url: 'api/v1/collects' }, //收藏商品
  delCollect: { url: 'api/v1/collects', method: 'delete' }, //移除收藏商品
  getUserInfo: { url: 'api/v1/user_info', method: 'get' }, //获取个人信息
  editUserInfo: { url: 'api/v1/user_info', method: 'post' }, //个人资料完善
  getAddress: { url: 'api/v1/address', method: 'get' }, //获取收货地址
  addAdress: { url: 'api/v1/address', method: 'post' }, //添加收货地址
  setAdress: { url: 'api/v1/address', method: 'put' }, //编辑收货地址
  delAdress: { url: 'api/v1/address', method: 'delete' }, //删除收货地址
  getProvince: { url: '/api/v1/province', method: 'get' }, //获取省
  getCity: { url: '/api/v1/city', method: 'get' }, //获取市
  getDistrict: { url: '/api/v1/district', method: 'get' }, //获取区
  goodsRecommend: { url: 'api/v1/recommend', method: 'get' }, //
  cartRecommend: { url: 'api/v1/recommendcart', method: 'get' }, //
  coupons: { url: 'api/v1/coupons', method: 'get' }, //
  getappoint: { url: 'api/v1/appointment', method: 'get' }, //获取预约信息
  addAppointment: { url: 'api/v1/appointment', method: 'post' },
  getStore: { url: 'api/v1/store', method: 'get' },
  cancelAppointment: { url: 'api/v1/appointment', method: 'put', isJson: true },
  getOrders: { url: 'api/v1/my/orders', method: 'get' },
  getCoupons: { url: 'api/v1/my/coupons', method: 'get' }, //查看个人优惠券
  addCoupons: { url: 'api/v1/my/coupons' }, //领取优惠券
  addOrder: { url: 'api/v1/cart', method: 'put', isJson: true }, //下单
  getLogitics: { url: 'api/v1/logitics', method: 'get' }, //查看快递
  getTicheng: { url: 'api/v1/ticheng', method: 'get' },
  lastTicheng: { url: 'api/v1/lastticheng', method: 'get' },
  updateAppointment: { url: 'api/v1/appointment', method: 'put', isJson: true },
  getOrder: { url: 'api/v1/order/detail/:id', method: 'get' },
  changeOrder: { url: 'api/v1/change_order', method: 'post' }
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
