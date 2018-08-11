import Vue from 'vue'
import Router from 'vue-router'
import Welcome from '@/components/Welcome'
import Chat from '@/components/Chat'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'Welcome',
      component: Welcome
    },
    {
      // path: '/chat/:uname', // this is one way if you want it in the url but instead you can pass as a props (see below) and recieve it in the component in a props array.
      path: '/chat',
      name: 'Chat',
      component: Chat,
      props: true,
      beforeEnter: (to, from, next) => {
        console.log(to.params.uname)
        if (to.params.uname){
          next() // to the chat component
        } else {
          next({name: 'Welcome'})
        }
      }
    }
  ]
})
