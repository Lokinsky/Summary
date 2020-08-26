require('intersection-observer');
import Vue from "vue"
import VueRouter from 'vue-router'
//import Core from './core/Core.js'
import core from './core/Vue_adapter_core.js'
import { ObserveVisibility } from 'vue-observe-visibility'

import './css/style.css'
//import component from './component.vue'

import App from './App.vue'

//import component from "./components/component.vue" 
import summary_bundle from "./bundles/Summary/Summary.vue" 
import ProjectItem from "./bundles/Summary/components/Project.vue" 
 
Vue.directive('observe-visibility', ObserveVisibility)
Vue.use(VueRouter)
Vue.use(core)
//Vue.prototype.$core = new Core();
//Vue.use(Vuex)
Vue.config.productionTip = false

//Vue.component('LoginComponent', LoginComponent)
Vue.component('Summary', summary_bundle)
Vue.component('ProjectItem', ProjectItem)


const routes = [
    {   path: '/', component: App},
    {   path: '/summary', component: summary_bundle},
]

const router = new VueRouter({
    routes,
    
})

const application = new Vue({
    core,  
    created(){
      //console.log(this.$core)  
      //console.log('created and init plugins') 
      //this.$core._init_plugins();
      //console.log(this.$core())
       
    },
    watch: {
        $route(to, from) {
            // обрабатываем изменение параметров маршрута...
            //console.log(`from '${from.path}' to '${to.path}'`)
            
            

        }
    },
    async mounted(){
        var core = this.$core()
        await function(){
            
            /*setInterval(()=>{
                console.log('index, accessing flow')
                console.log(core.access_flow('*','state'))
                console.log('end')
            },6000)*/
        }()
    },
    update(){
  
    },
    methods:{

    },
    router
  }).$mount('#app')