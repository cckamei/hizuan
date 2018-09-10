const router = [
  {
    name: 'index',
    path: '/',
    component: () => import('@/views/home')
  },
  {
    name: 'goodslist',
    path: '/goodslist',
    component: () => import('@/views/goodslist')
  },
  {
    name: 'goodssearch',
    path: '/goodslist/goodssearch',
    component: () => import('@/views/goodssearch')
  },
  {
    name: 'goodsdetail',
    path: '/goodslist/goodssearch/goodsdetail',
    component: () => import('@/views/goodsdetail'),
    meta: {
      params: ['goodsId']
    }
  },
  {
    name: 'cart',
    path: '/goodslist/goodssearch/goodsdetail/cart',
    component: () => import('@/views/cart'),
    meta: {
      params: ['token']
    }
  },
  {
    name: 'confirmorder',
    path: '/goodslist/goodssearch/goodsdetail/cart/confirmorder',
    component: () => import('@/views/confirmorder')
  },
  {
    name: 'address',
    path: '/goodslist/goodssearch/goodsdetail/cart/confirmorder/address',
    component: () => import('@/views/address')
  },
  {
    name: 'pay',
    path: '/goodslist/goodssearch/goodsdetail/cart/confirmorder/pay',
    component: () => import('@/views/pay')
  },
  {
    name: 'paysuccess',
    path: '/goodslist/goodssearch/goodsdetail/cart/confirmorder/pay/paysuccess',
    component: () => import('@/views/paysuccess')
  },
  {
    name: 'login',
    path: '/login',
    component: () => import('@/views/login')
  },
  {
    name: 'register',
    path: '/login/register',
    component: () => import('@/views/register')
  },
  {
    name: 'verifyphone',
    path: '/login/verifyphone',
    component: () => import('@/views/verifyphone')
  },
  {
    name: 'personal-data',
    path: '/login/verifyphone/personal-data',
    component: () => import('@/views/user/personal-data')
  },
  {
    name: 'registersuccess',
    path: '/login/verifyphone/perfectinfo/registersuccess',
    component: () => import('@/views/registersuccess')
  },
  {
    name: 'mypage',
    path: '/mypage',
    component: () => import('@/views/user/index')
  },
  {
    name: 'commissions',
    path: '/commissions',
    component: () => import('@/views/commissions')
  },
  {
    name: 'orderlist',
    path: '/my/orderlist',
    component: () => import('@/views/order/index')
  },
  {
    name: 'orderdetail',
    path: '/my/orderdetail',
    component: () => import('@/views/orderdetail')
  },
  {
    name: 'logistics',
    path: '/my/logistics',
    component: () => import('@/views/logisticsTrack')
  },
  {
    name: 'mystore',
    path: '/my/mystore',
    component: () => import('@/views/mystore')
  },
  {
    name: 'myset',
    path: '/my/myset',
    component: () => import('@/views/myset')
  },
  {
    name: 'editinfo',
    path: '/my/myset/editinfo',
    component: () => import('@/views/editinfo')
  },
  {
    name: 'myaddress',
    path: '/my/myaddress',
    component: () => import('@/views/myaddress')
  },
  {
    name: 'revisepwd',
    path: '/my/revisepwd',
    component: () => import('@/views/revisepwd')
  },
  {
    name: 'editaddress',
    path: '/my/editaddress',
    component: () => import('@/views/editaddress')
  },
  {
    name: 'applyrefund',
    path: '/my/applyrefund',
    component: () => import('@/views/applyrefund')
  },
  {
    name: 'refunddetail',
    path: '/my/refunddetail',
    component: () => import('@/views/refunddetail')
  },
  {
    name: 'cancelList',
    path: '/my/cancelList',
    component: () => import('@/views/cancelList')
  },
  {
    name: 'bespeak',
    path: '/mypage/bespeak',
    component: () => import('@/views/bespeak/index')
  },
  {
    name: 'addappointment',
    path: '/mypage/bespeak/addappointment',
    component: () => import('@/views/bespeak/add')
  },
  {
    name: 'freebuy',
    path: '/home/freebuy',
    component: () => import('@/views/freebuy')
  },
  {
    path: '*',
    redirect: '/'
  }
];

export default router;
