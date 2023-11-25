import Vue from "vue";
import Vuex from "vuex"
import{saveToken,getToken} from "@/utils/localstorage"
import{getUser,saveUser} from '@/utils/localstorage'
Vue.use(Vuex)
export default new Vuex.Store({
    state:{
        user:getUser(),
        tokenInfo:getToken(),
    },
    mutations:{
      setuser(state,value){
        state.user=value
        saveUser(value)
      },
      mSetTokenInfo(state, newTokenInfo) {
        state.tokenInfo = newTokenInfo
        saveToken(newTokenInfo)
      }
    }
})