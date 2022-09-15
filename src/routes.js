import Vue from 'vue'
import router from 'vue-router'
import Home from './views/Home.vue'

Vue.use(router)

export default new router({
    routes:[
        {
            path: '/',
            name:'home',
            component: Home
        },
        {
            path: '/about',
            name:'home',
            component: Home
        },
    ]
})