import homePage from './views/app-home.cmp.js'
import aboutPage from './views/app-about.cmp.js'

import keep from './apps/keep/pages/note-app.cmp.js'
import noteDetails from './apps/keep/pages/note-details.cmp.js'
import noteAdd from './apps/keep/pages/note-add.cmp.js'

import mail from './apps/mail/pages/mail-app.cmp.js'
import mailDetails from './apps/mail/pages/mail-details.cmp.js'

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
      children: [
        {
          path: '/keep/:id',
          component: noteDetails,
        },
        {
          path: '/keep/add',
          component: noteAdd,
        },
      ],
    },
    {
      path: '/mail',
      component: mail,
      children: [
        {
          path: '/mail/:id',
          component: mailDetails,
          name: 'details',
          props: true,
        },
      ],
    },
  ],
}

export const router = createRouter(routerOptions)
