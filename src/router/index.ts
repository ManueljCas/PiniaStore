import { createRouter, createWebHistory } from 'vue-router'
import App from '@/App.vue'
import StudentsListView from '@/views/StudentsListView.vue'
import StudentComponentsView from '@/views/StudentComponentsView.vue'
import CreateStudentView from '@/views/CreateStudentView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'Home',
      component: StudentsListView
    },
    {
      path: '/List',
      name: 'List',
      component: StudentsListView 
    },
    {
      path: '/Student/:id',
      name: 'Student',
      component: StudentComponentsView
    },
    {
      path: '/create',
      name: 'create',
      component: CreateStudentView
    }
  ]
})

export default router
