import Vue from 'vue';
import App from './App.vue';
import 'babel-polyfill';
//import router from './router';
import singleSpaVue from 'single-spa-vue';

const vueLifecycles = singleSpaVue({
  Vue,
  appOptions: {
    render: h => h(App),
    //router,
  },
});

export const bootstrap = vueLifecycles.bootstrap;
export const mount = vueLifecycles.mount;
export const unmount = vueLifecycles.unmount;