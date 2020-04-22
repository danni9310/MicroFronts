import Vue from 'vue';

Vue.use(VueRouter);

export default new VueRouter({
    routes: [{
      path: '/',
      name: 'Login',
      component: Login,
    }]
});