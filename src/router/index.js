import Vue from 'vue'
import VueRouter from 'vue-router'
import Main from '../Layouts/Main.vue';
import Home from '../screens/Home.vue'
import JoinUs from '../screens/JoinUs.vue'
import CompanyBenefits from '../screens/CompanyBenefits.vue'
import ProcessFaq from '../screens/Process&faq.vue'
import ResumeDelivery from '../screens/ResumeDelivery.vue'


Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    component: Main,
    children: [
      {
        name: 'home',
        path: '/',
        component: Home,
      },
      {
        name: 'join us',
        path: '/join_us',
        component: JoinUs,
        children: [
          // {
          //   path: '',
          //   component: () => import('../screens/SocialRecruitment.vue'),
          // },
          // {
          //   name: 'Social Recruitment',
          //   path: 'social_recruitment',
          //   component: () => import('../screens/SocialRecruitment.vue'),
          // },
          {
            name: 'Company benefits',
            path: 'company_benefits',
            component: CompanyBenefits,
          },
          {
            name: 'Process & FAQ',
            path: 'process_and_faq',
            component: ProcessFaq,
          },
          {
            name: 'Resume Delivery',
            path: 'resume_delivery',
            component: ResumeDelivery,
          },
          {
            path: '/:pathMatch(.*)',
            component: CompanyBenefits,
          },
        ],
      },
    ],
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
  scrollBehavior(to) {
    if (to.hash) {
      return { selector: to.hash, behavior: 'smooth' };
    } else {
      return { x: 0, y: 0 };
    }
  },
})

export default router
