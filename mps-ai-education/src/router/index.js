import Vue from "vue";
import VueRouter from 'vue-router'
Vue.use(VueRouter)
const router= new VueRouter({
    routes:[
        {path:'/', component:()=>import('../view/BaseInfo.vue')},
        {path:'/loginfrom', component:()=>import('../view/LoginFrom.vue')},
        {path:'/homepage', component:()=>import('../components/HomePage.vue')},
    ]
})
//push 
const VueRouterPush = VueRouter.prototype.push 
VueRouter.prototype.push = function push (to) {
    return VueRouterPush.call(this, to).catch(err => err)
}
//replace
const VueRouterReplace = VueRouter.prototype.replace
VueRouter.prototype.replace = function replace (to) {
  return VueRouterReplace.call(this, to).catch(err => err)
}
export default router