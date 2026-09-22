import { createRouter, createWebHistory } from 'vue-router'
import InicioView from '../views/InicioView.vue'
import TarefasView from '../views/TarefasView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    { path: '/', name: 'inicio', component: InicioView },
    { path: '/tarefas', name: 'tarefas', component: TarefasView },
  ],
})

export default router
