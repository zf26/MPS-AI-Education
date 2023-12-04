<template>
    <div>
      <img src="../assets/images/logo.png" alt="" class="img_bk">
      <section>
        <div class="color"></div>
        <div class="color"></div>
        <div class="color"></div>
        <div class="box">
          <div class="square" style="--i:0;"></div>
          <div class="square" style="--i:1;"></div>
          <div class="square" style="--i:2;"></div>
          <div class="square" style="--i:3;"></div>
          <div class="square" style="--i:4;"></div>
          <div class="container">
            <div class="form">
              <h2 v-if="this.choose">登录</h2>
              <h2 v-else>注册</h2>
            <form @submit.prevent>
              <div class="inputBox">
                  <input type="text" placeholder="QQ邮箱" v-model="user.email" v-if="!this.choose">
                </div>
                <div class="inputBox">
                  <input type="text" placeholder="用户名" v-model="user.username">
                </div>
                <div class="inputBox">
                  <input type="password" placeholder="密码" v-model="user.password">
                </div>
                <div class="inputBox">
                  <input type="password" placeholder="验证码" v-model="smscode" v-if="!this.choose">
                </div>
                  <el-button size="small" @click="getsmsCode" v-if="!this.choose" class="inputBox" :disabled="
                  (!this.fun(this.user.email))||
                  (this.user.username.trim()==='')||
                  (this.user.password.trim()==='')||
                  (this.smscode.trim()!=''||
                  this.timeout)"><div v-if="!this.timeout">获 取 验 证 码</div>
                                 <div v-else>{{ countdown }} 秒后重新获取</div>
                  </el-button >
                <div class="inputBox">
                  <input type="submit" value="登 录" @click="login" v-if="this.choose">
                  <input type="submit" value="注 册" @click="register" v-else>
                </div>
                <p class="forget">忘记密码？<label @click="forgetpwd">点这</label></p>
                <p class="forget" v-if="this.choose">没 有 账 户？ <label @click="chooseswith" >注 册</label></p>
                <p class="forget" v-else>已 经 有 账 户 ? <label @click="chooseswith" >登 录</label></p>
            </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  </template>
  
  <script>
  import axios from 'axios'
  import { checkEmail } from '@/utils/checkEmail'
  export default {
     data(){
      return{
        user:{
          id: '',
          email: '',
          username: '',
          password: '',
        },
        choose:true,
        message:'',
        smscode:'',
        timeout:false,
        countdown:30,
        timer:null,
      }
     },
     methods:{
       async checksmscode(){
          await axios.post(`/user/checksmsCode?email=${this.user.email}&code=${this.smscode}`).then(res=>{
            return res.data;
           })
        },
        fun(email){
         return checkEmail(email)
        },
      async getsmsCode(){
        if(checkEmail(this.user.email)){
        await axios.get(`/user/setsmsCode?mail=${this.user.email}`).then(res=>{
            if(res.data.code==200){
            this.$message.success(res.data.msg)
            this.timeout=true
            this.startCountdown()
            }else{
            this.$message.error(res.data.msg)
            }
         })
        }else{
          this.$message.error("请输入正确的邮箱!")
        }
      },
      chooseswith(){
        this.user.username=''
        this.user.password=''
        this.choose=!this.choose
      },
      forgetpwd(){
  
      },
      validatePassword(password) {
        if (password.length < 8) {
          this.message = '密码长度至少为8个字符!'
          return false
        }
        const hasNumber = /\d/.test(password)
        const hasUpperCase = /[A-Z]/.test(password)
        if (!hasNumber || !hasUpperCase) {
          this.message = '密码必须包含至少一个数字和一个大写字母!'
          return false
        }
        const hasSpecialChar = /[!@#$%^&*(),.?":{}|<>]/.test(password)
        if (!hasSpecialChar) {
          this.message = '密码必须包含至少一个特殊字符'
          return false
        }
        this.message = ''
        return true
      },
      register(){
        if(this.user.email.trim()===''){
          this.$message.error("邮箱不能为空！")
        }
        else if(this.user.username.trim()===''||this.user.password.trim()==='')
        {
          this.$message.error("用户名或密码不能为空！")
        }else if(!this.validatePassword(this.user.password)){
          this.$message.error(this.message)
        }else if(this.smscode.trim()==''){
          this.$message.error("验证码不能为空！")
         }else{
          if(this.checksmscode()){
            axios.post('/user/register', this.user).then(res => {
                 console.log(res)
            })
        }else{
          this.$message.error("验证码无效!")
        }
        }
      },
      login(){
        if(this.user.username.trim()===''||this.user.password.trim()==='')
      {
        this.$message.error("用户名或密码不能为空！")
      }else{
        console.log(this.user)
        axios.post('/user/login',this.user).then(res=>{
      if(res.data.is_right)
      { 
          this.$store.commit('setuser',res.data.user)
          this.$store.commit('mSetTokenInfo',res.data.user.token)
          this.$message.success(res.data.message)
          setTimeout(()=>{this.$router.push('/homepage')},1000)
      }
      else{
        this.$message.error("用户名或密码错误")
      }
        })     
      }
      }, 
      startCountdown() {
        this.countdown = 60; 
        this.timer = setInterval(() => {
          this.countdown--;
        }, 1000);
      }
     },
     watch:{
      countdown(newVal) {
        if (newVal === 0) {
          this.timeout=false;
          clearInterval(this.timer);
        }
      },
     }
  }
  </script>
  
  <style>
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Poppins', sans-serif;
  }
  body {
    overflow: hidden;
  }
  
  section {
    display: flex;
    justify-content: center;
    align-items: center;
    min-height: 100vh;
    background: linear-gradient(to bottom, #f1f4f9, #dff1ff);
  }
  section .color {
    position: absolute;
    filter: blur(150px);
  }
  section .color:nth-child(1) {
    top: -350px;
    width: 600px;
    height: 600px;
    background: pink;
  }
  
  section .color:nth-child(2) {
    bottom: -150px;
    left: 100px;
    width: 500px;
    height: 500px;
    background: #fcf959;
  }
  section .color:nth-child(3) {
    bottom: 50px;
    right: 100px;
    width: 500px;
    height: 500px;
    background: skyblue;
  }
  .box {
    position: relative;
  }
  .box .square {
    position: absolute;
    backdrop-filter: blur(5px);
    box-shadow: 0 25px 45px rgb(0, 0, 0, 0.1);
    border: 1px solid rgb(255, 255, 255, 0.5);
    border-right: 1px solid rgb(255, 255, 255, 0.2);
    border-bottom: 1px solid rgb(255, 255, 255, 0.2);
    background: rgb(255, 255, 255, 0.1);
    border-radius: 10px;
    animation: animate 10s linear infinite;
    animation-delay: calc(-1s*var(--i));
  }
  
  /* 动画 */
  @keyframes animate {
    0%,
    100% {
      transform: translateY(-40px);
    }
    50% {
      transform: translate(40px);
    }
  }
  .box .square:nth-child(1) {
    top: -50px;
    right: -60px;
    width: 100px;
    height: 100px;
  }
  
  .box .square:nth-child(2) {
    top: 150px;
    left: -100px;
    width: 120px;
    height: 120px;
    z-index: 2;
  }
  
  .box .square:nth-child(3) {
    bottom: 50px;
    right: -60px;
    width: 80px;
    height: 80px;
    z-index: 2;
  }
  
  .box .square:nth-child(4) {
    bottom: -80px;
    left: 100px;
    width: 50px;
    height: 50px;
  }
  
  .box .square:nth-child(5) {
    top: -90px;
    left: 140px;
    width: 60px;
    height: 60px;
  }
  
  .container {
    position: relative;
    width: 400px;
    min-height: 400px;
    background: rgb(255, 255, 255, 0.1);
    border-radius: 10px;
    display: flex;
    justify-content: center;
    align-items: center;
    backdrop-filter: blur(5px);
    box-shadow: 0 25px 45px rgb(0, 0, 0, 0.1);
    border: 1px solid rgb(255, 255, 255, 0.5);
    border-right: 1px solid rgb(255, 255, 255, 0.2);
    border-bottom: 1px solid rgb(255, 255, 255, 0.2);
  }
  
  .form {
    position: relative;
    height: 100%;
    width: 100%;
    padding: 40px;
  }
  
  .form h2 {
    position: relative;
    color: black;
    font-size: 24px;
    font-weight: 600;
    letter-spacing: 1px;
    margin-bottom: 40px;
  }
  
  .form h2::before {
    content: '';
    position: absolute;
    left: 0;
    bottom: -10px;
    width: 80px;
    height: 4px;
    background: #fff;
  }
  .form .inputBox {
    width: 100%;
    margin-top: 20px;
  }
  .form .inputBox input {
    width: 100%;
    background: rgb(255, 255, 255, 0.2);
    border: none;
    outline: none;
    padding: 10px 20px;
    border-radius: 35px;
    border: 1px solid rgb(255, 255, 255, 0.5);
    border-right: 1px solid rgb(255, 255, 255, 0.2);
    border-bottom: 1px solid rgb(255, 255, 255, 0.2);
    font-size: 16px;
    letter-spacing: 1px;
    color: #fff;
    box-shadow: 0 5px 15px rgb(0, 0, 0, 0.05);
  }
  .form .inputBox input::placeholder {
    color: #fff;
  }
  .form .inputBox input[type="submit"] {
    background: #fff;
    color: #666;
    max-width: 100px;
    cursor: pointer;
    margin-bottom: 20px;
    font-weight: 600;
  }
  .forget {
    margin-top: 5px;
    color: #c9c5c5;
  }
  .forget label {
    color: #fff;
    font-weight: 600;
  }
  .img_bk{
      position:fixed;
      transform: translateX(-750px) translateY(-100px);
      width: 100%;
      opacity: .8;
  }
  
  </style>