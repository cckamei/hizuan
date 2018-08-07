const router = [
  {
    name: 'index',
    path: '/',
    component: () => import('@/views/home')
  },
  {
    name: 'introduction',
    path: '/introduction',
    component: () => import('@/views/introduction')
  },
  {
    name: 'lifecycle',
    path: '/lifecycle',
    component: () => import('@/views/lifecycle')
  },
  {
    name: 'render',
    path: '/render',
    component: () => import('@/views/render')
  },
  {
    name: 'event',
    path: '/event',
    component: () => import('@/views/event')
  },
  {
    name: 'component',
    path: '/component',
    component: () => import('@/views/component')
  },
  {
    name: 'questions',
    path: '/questions',
    component: () => import('@/views/questions')
  },
  {
    path: '*',
    redirect: '/'
  }
  // {
  //   path: '/',
  //   redirect: '/index'
  // }
];

export default router;
