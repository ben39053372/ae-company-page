import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router';

const routes: RouteRecordRaw[] = [
  {
    path: '/',
    component: () => import('../Layouts/Main.vue'),
    children: [
      {
        name: 'home',
        path: '/',
        component: () => import('../screens/Home.vue'),
      },
      {
        name: 'joinUs',
        path: '/joinUs',
        component: () => import('../screens/JoinUs.vue'),
      },
    ],
  },
];

export default createRouter({
  history: createWebHistory(),
  routes,
});
