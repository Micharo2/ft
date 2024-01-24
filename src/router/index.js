import { createRouter, createWebHistory } from 'vue-router';
import Home from '../views/Home.vue';
import Rooms from '../views/Rooms.vue';
import Booking from '../views/Booking.vue';
import About from '../views/About.vue';
import Contact from '../views/Contact.vue';

const routes = [
  { path: '/', component: Home },
  { path: '/rooms', component: Rooms },
  { path: '/booking', component: Booking },
  { path: '/about', component: About },
  { path: '/contact', component: Contact }
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;