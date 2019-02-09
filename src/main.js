import Vue from 'vue'
import VueRouter from 'vue-router'
import BootstrapVue from 'bootstrap-vue'
import App from './App.vue'
import Routes from './routes'

Vue.use(VueRouter);
Vue.use(BootstrapVue);

const router = new VueRouter({
	routes: Routes
});

new Vue({
	router,
  render: h => h(App)
}).$mount('#vue-app');
