
import { createRouter, createWebHistory } from 'vue-router';
import LoginPage from '../components/LoginPage.vue'; 
import NavBar from '../components/NavBar.vue';
import ProfileScreen from '@/components/ProfileScreen.vue';

const routes = [
  {
    path: '/',
    name: 'NavBar',
    component: NavBar,
  },
  {
    path: '/login',
    name: 'LoginPage',
    component: LoginPage,
  },
  {
    path: '/profile',
    name: 'ProfilePage',
    component: ProfileScreen,
  }
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;

