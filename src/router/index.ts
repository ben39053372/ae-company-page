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
        name: 'join us',
        path: '/join_us',
        component: () => import('../screens/JoinUs.vue'),
        children: [
          {
            path: '',
            component: () => import('../screens/SocialRecruitment.vue'),
          },
          {
            name: 'Social Recruitment',
            path: 'social_recruitment',
            component: () => import('../screens/SocialRecruitment.vue'),
          },
          {
            name: 'Company benefits',
            path: 'company_benefits',
            component: () => import('../screens/CompanyBenefits.vue'),
          },
          {
            name: 'Process & FAQ',
            path: 'process_and_faq',
            component: () => import('../screens/Process&faq.vue'),
          },
          {
            name: 'Resume Delivery',
            path: 'resume_delivery',
            component: () => import('../screens/ResumeDelivery.vue'),
          },
        ],
      },
    ],
  },
];

export default createRouter({
  history: createWebHistory(),
  routes,
});
