import homePage from './views/app-home.cmp.js'
import aboutPage from './views/app-about.cmp.js'
import keep from './apps/keep/pages/note-app.cmp.js'
import mail from './apps/mail/pages/mail-app.cmp.js'

const { createRouter, createWebHashHistory } = VueRouter

const routerOptions = {
  history: createWebHashHistory(),
  routes: [
    {
      path: '/',
      component: homePage,
    },
    {
      path: '/about',
      component: aboutPage,
    },
    {
      path: '/keep',
      component: keep,
    },
    {
      path: '/mail',
      component: mail,
    },
  ],
}

export const router = createRouter(routerOptions)
