import Vue from 'vue'
import VueRouter from 'vue-router'
import BootstrapVue from 'bootstrap-vue'
import wysiwyg from 'vue-wysiwyg';
import App from './App.vue'
import Routes from './routes'

Vue.use(VueRouter);
Vue.use(BootstrapVue);
Vue.use(wysiwyg, {
  // { [module]: boolean (set true to hide) }
  hideModules: { "bold": true },
  
  // if the image option is not set, images are inserted as base64
  image: {
    uploadURL: "/api/myEndpoint",
    dropzoneOptions: {}
  },
  
  // limit content height if you wish. If not set, editor size will grow with content.
  maxHeight: "500px"
});

const router = new VueRouter({
	routes: Routes
});

new Vue({
	router,
  render: h => h(App)
}).$mount('#vue-app');
