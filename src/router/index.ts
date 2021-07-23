import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router';

const routes: RouteRecordRaw[] = [
  {
    path: '/',
    component: () => import('../Layouts/Main.vue'),
    children: [
      {
        name: 'Home',
        path: '/',
        component: () => import('../screens/Home.vue'),
      },
    ],
  },
  {
    path: '/detail',
    name: 'detail',
    component: () => import('../screens/Detail.vue'),
  },
];

export default createRouter({
  history: createWebHistory(),
  routes,
});
