// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import firbase from 'firebase'
import './components/FirebaseLink/FirebaseInit'
import htmlToPdf from './components/HtmlToPdf/HtmlToPdf'
import VueGoodTable from 'vue-good-table'

Vue.config.productionTip = false
Vue.use(htmlToPdf)
Vue.use(VueGoodTable)


let app;
firbase.auth().onAuthStateChanged(user =>{
  if(!app){
    app = new Vue({
      el: '#app',
      router,
      components: { App },
      template: '<App/>'
    })
  }
});


