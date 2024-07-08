import { createRouter, createWebHistory } from 'vue-router';
import DashboardLayout from '../components/layout/DashboardLayout.vue';
import ExpensesView from '@/views/ExpensesView.vue';
 

const routes = [
  {
    path: '/',
    component: DashboardLayout,
    children: [
      {
        path: '',
        component: ExpensesView,
      },
      {
        path: '/expenses',
        component: ExpensesView,
      },
    ],
  },
];

const router = createRouter({
  history: createWebHistory("/"),
  routes,
});

export default router;
