let routes = [
  { path: '/', component: Home },
  { path: '/about', component: About },
  { path: '/contact', component: Contact },

  { path: '/peip2/arduino', component: Arduino },
  { path: '/peip2/intro-au-web', component: IAW },
  { path: '/peip2/application-du-web', component: ADW },
  { path: '/info3/programmation-web', component: PW },

  { path: '/cours/student/:id', component: Student },
];

let router = VueRouter.createRouter({
  history: VueRouter.createWebHashHistory(),
  routes
})





