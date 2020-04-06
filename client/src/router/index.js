import Vue from 'vue'
import Router from 'vue-router'
import Register from '@/components/Register'
import Login from '@/components/Login'
import Song from '@/components/Songs/index'
import CreateSong from '@/components/CreateSong'
import ViewSong from '@/components/ViewSong/ViewSong'
import EditSong from '@/components/EditSong'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '*',
      redirect: 'song'
    },
    {
      path: '/register',
      name: 'register',
      component: Register
    },
    {
      path: '/login',
      name: 'login',
      component: Login
    },
    {
      path: '/song',
      name: 'song',
      component: Song
    },
    {
      path: '/create-song',
      name: 'create-song',
      component: CreateSong
    },
    {
      path: '/song/:songId',
      name: 'view-song',
      component: ViewSong
    },
    {
      path: '/song/:songId/edit',
      name: 'edit-song',
      component: EditSong
    }
  ]
})
