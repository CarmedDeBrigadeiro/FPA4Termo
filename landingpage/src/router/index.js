
import { createRouter, createWebHistory } from 'vue-router';
import LoginPageView from '../views/LoginPageView.vue'; 
import HomeView from '../views/HomeView.vue';
import CadastroPage from '@/components/CadastroPage.vue';

const routes = [
  {
  path: '/signup',
  name: 'CadastroPage',
  component: CadastroPage
  },
  {
    path: '/',
    name: 'Home',
    component: HomeView,
  },
  {
    path: '/login',
    name: 'LoginPage',
    component: LoginPageView,
  },

];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;

