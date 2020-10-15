import Vue from 'vue'
import VueRouter from 'vue-router'
import HomePage from './../components/HomePage.vue'
import ComicItem from './../components/ComicItem.vue'
import ComicsList from './../components/ComicsList.vue'
import CharactersList from './../components/CharactersList.vue'
import CharacterItem from './../components/CharacterItem.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: HomePage
  },
  {
    path: '/Comics',
    name: 'ComicsList',
    component: ComicsList
  },
  {
    path: '/Comic/:id',
    name: 'ComicItem',
    component: ComicItem
  },
  {
    path: '/Characters',
    name: 'CharactersList',
    component: CharactersList
  },
  {
    path: '/Character/:id',
    name: 'CharacterItem',
    component: CharacterItem
  },
]

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
})

export default router
