
import { createRouter, createWebHistory } from 'vue-router';

import CadastroPage from '@/components/CadastroPage.vue';
import LoginPageView from '../views/LoginPageView.vue'; 
import HomeView from '../views/HomeView.vue';
import CadastroPage from '@/components/CadastroPage.vue';
import ProfileScreen from '@/components/ProfileScreen.vue';


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
  {
    path: '/profile',
    name: 'ProfilePage',
    component: ProfileScreen,
  },
  {
    path: '/register',
    name: 'CadastroPage',
    component: CadastroPage
  }

];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;

