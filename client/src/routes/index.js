import Vue from 'vue';
import VueRouter from 'vue-router';

Vue.use(VueRouter);

import MainView from '../view/MainView.vue';
import WorldView from '../view/WorldView.vue';
import VaccineView from '../view/VaccineView.vue';
import SocialDistancingView from '../view/SocialDistancingView.vue';
import FaqView from '../view/FqaView.vue';

export const router = new VueRouter({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'main',
      component: MainView,
    },
    {
      path: '/world',
      name: 'world',
      component: WorldView,
    },
    {
      path: '/vaccine',
      name: 'vaccine',
      component: VaccineView,
    },
    {
      path: '/social-distancing',
      name: 'social-distancing',
      component: SocialDistancingView,
    },
    {
      path: '/faq',
      name: 'faq',
      component: FaqView,
    },
  ],
});
