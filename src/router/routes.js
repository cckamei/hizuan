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
    name: 'gooddetail',
    path: '/goodslist/goodssearch/gooddetail',
    component: () => import('@/views/gooddetail')
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
