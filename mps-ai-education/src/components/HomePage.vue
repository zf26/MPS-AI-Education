<template>
  <div>
    <base-info></base-info>
    <img src="../assets/images/logo.png" alt="" class="topimg">
    <div style="display: inline-block;width: 55%;"></div>
    <top-bar></top-bar>
    <div class="bodybox">
         <div class="mainbox">
          
         </div>
    </div>
  </div>
</template>

<script>
import TopBar from '@/view/TopBar.vue'
import BaseInfo from '@/view/BaseInfo.vue'
export default {
  components:{TopBar,BaseInfo},
    data(){
     return{
        
     } 
    }

}
</script>

<style>
body{
  margin: 0px;
  padding: 0px;
}
.topimg{
  width: 50%;
  position: fixed;
  top: -60px;
  left: -150px;
  opacity: 0.8;
  transform: scale(0.6);
  z-index: -1;
}
.bodybox{
  width: 100%;
  display: flex;
  justify-content: center;
}
.mainbox{
  background-color: antiquewhite;
  width: 80%;
  height: 500px;
}
</style>