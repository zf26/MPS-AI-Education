<template>
    <div class="topNav">
        <div class="Head_Navigation">
        <div>首页</div>
        <div class="Way">编程语言
            <ul class="Down_Menu">
            <li>Python基础</li>
            <li>Python进阶</li>
            <li>工具包</li>   
           </ul></div>
        <div>体验AI</div>
        <div>人工智能</div>
        <div class="Way">我的
            <ul class="Down_Menu">
                <li @click="BaseInfo">基本信息</li>
                <li>学习课程</li>
                <li @click="ExitLogin">退出登录</li>   
               </ul>
        </div>
    </div>
    <div class="baseinFor">
        <img src="../assets/images/2.jpg" class="hadpro" style="width: 50px;height: 50px;border-radius: 50%;
        position: absolute;left:0px;transition: all .5s;">
        <span class="usename">啊巴啊巴</span>
    </div>
  </div>
</template>

<script>
export default {
    data(){
     return{
        
     } 
    },
    methods:{
        BaseInfo(){

        },
        ExitLogin(){
            this.$router.push('/loginfrom')
        }
    }
}
</script>

<style>
.Head_Navigation{
    position: relative;
    display: flex;
    height: 50px;
    width: 100%;
    background-color:rgba(120, 247, 247, 0.6);
    justify-content: center;
    z-index: 1;
    cursor: pointer;
}
.Head_Navigation div{
    font-size: 16px;
    font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
    text-align: center;
    line-height: 50px;
    width: 200px;
    height: 50px;
    transition: all .5s; 
    overflow: hidden;
}
.Head_Navigation div:nth-child(2):hover,.Head_Navigation div:nth-child(5):hover{
    background-color: #79cffa;
    border-radius: 5px;
    height: 200px;
}
.Head_Navigation :hover{
    background-color: #79cffa;
    border-radius: 5px;
}
.Down_Menu{
    margin: 0px;
    padding-inline-start: 0px;
    list-style: none;
    background-color:#79cffa;
    transition: all .5s; 
}
.Down_Menu li{
    width: 200px;
}
.Down_Menu li:hover{
    background-color: rgba(120, 247, 247, 0.6);
}
.baseinFor{
  z-index: 2;
  width: 50px;
  height: 50px;
  display: inline-block;
  border-radius: 50px;
  position: absolute;
  top: 78px;
  left: 85%;
  overflow: hidden;
  transition: all .5s;
  background: rgb(255, 255, 255, 0.2);
  box-shadow: 0 25px 45px rgb(0, 0, 0, 0.1);
  border: 1px solid rgb(255, 255, 255, 0.8);
}
.hadpro:hover{
  box-shadow: 0px 0px 150px 100px rgba(11, 252, 252, 0.5);
  border:1px pink solid;
  transform: scale(1.2) translateX(10px);
}
.baseinFor:hover{
  width: 200px;
}
.usename{
  position: absolute;
  font-weight: 700;
  top: 30%;
  right: 30%;
  opacity: 0;
  transition: all .5s;
}
.baseinFor:hover .usename{
  opacity: 1;
}
</style>