<template>
  <div>
    <img src="../assets/images/logo.png" alt="" class="topimg">
    <top-bar></top-bar>
  </div>
</template>

<script>
import TopBar from '../view/TopBar.vue'
export default {
  components: { TopBar },

}
</script>

<style>
.topimg{
  width: 50%;
  position: fixed;
  top: -60px;
  left: -150px;
  opacity: 0.8;
  transform: scale(0.6);
}
</style>