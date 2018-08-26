const router = [
  {
    name: 'index',
    path: '/home',
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
    component: () => import('@/views/goodsdetail')
  },
  {
    name: 'cart',
    path: '/goodslist/goodssearch/goodsdetail/cart',
    component: () => import('@/views/cart')
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
    path: '/',
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
    name: 'perfectinfo',
    path: '/login/verifyphone/perfectinfo',
    component: () => import('@/views/perfectinfo')
  },
  {
    name: 'registersuccess',
    path: '/login/verifyphone/perfectinfo/registersuccess',
    component: () => import('@/views/registersuccess')
  },
  {
    path: '*',
    redirect: '/'
  }
];

export default router;
