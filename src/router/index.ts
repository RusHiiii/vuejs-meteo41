import { createRouter, createWebHistory } from 'vue-router'
import {registerLayout} from "@/layouts/register.ts";
import {ROUTES} from "@/core/constant.ts";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  scrollBehavior() {
    return {
      top: 0,
      behavior: 'smooth'
    }
  },
  routes: [
    {
      path: '/',
      name: ROUTES.HOME,
      component: () => import('@/views/HomeView.vue'),
      meta: {
        layout: 'DefaultLayout'
      }
    },
    {
      path: '/about',
      name: ROUTES.ABOUT,
      component: () => import('@/views/AboutView.vue'),
      meta: {
        layout: 'DefaultLayout'
      }
    },
    {
      path: '/contact',
      name: ROUTES.CONTACT,
      component: () => import('@/views/ContactView.vue'),
      meta: {
        layout: 'DefaultLayout'
      }
    },
    {
      path: '/weather/current',
      name: ROUTES.CURRENT_WEATHER_DATA,
      component: () => import('@/views/CurrentWeatherDataView.vue'),
      meta: {
        layout: 'DefaultLayout'
      }
    },
    {
      path: '/weather/graph',
      name: ROUTES.PERIOD_GRAPHIC,
      component: () => import('@/views/GraphicView.vue'),
      meta: {
        layout: 'DefaultLayout'
      }
    },
    {
      path: "/weather/history/:period(daily|weekly|monthly|yearly|record)",
      name: ROUTES.PERIOD_WEATHER_DATA,
      component: () => import('@/views/HistoryWeatherDataView.vue'),
      meta: {
        layout: 'DefaultLayout'
      }
    },
    {
      path: '/:pathMatch(.*)*',
      name: ROUTES.NOT_FOUND,
      component: () => import('@/views/NotFoundView.vue'),
      meta: {
        layout: 'DefaultLayout'
      }
    }
  ],
})

router.beforeEach(registerLayout)

export default router
