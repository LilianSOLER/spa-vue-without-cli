let routes = [
  { path: '/', component: Home },
  { path: '/school/:id1/:id2', component: School, props: true },
  { path: '/cours/student/:id', component: Student, props: true },
];

let router = VueRouter.createRouter({
  history: VueRouter.createWebHashHistory(),
  routes
})





