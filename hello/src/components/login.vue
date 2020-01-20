<template>
  <div class="box1">
    <div class="flex">
      <div class="left">
        后台管理系统1.0
      </div>
      <div class="box">
        <div class="title">登录</div>
        <el-input class="margin-bottom-20px" placeholder="请输入内容" v-model="input" clearable></el-input>
        <el-input class="margin-bottom-20px" placeholder="请输入密码" v-model="input1" show-password></el-input>
        <el-button class="button" type="primary" @click="navIndex">登录</el-button>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data () {
    return {
      input: '',
      input1: ''
    }
  },
  methods: {
    navIndex () {
      if (this.input === '123') {
        if (this.input1 === '123') {
          this.$router.push({path: '/index'})
        } else {
          alert('密码错误')
        }
      } else {
        alert('账号错误')
      }
    },
    handleSelect (key, keyPath) {
      console.log(key, keyPath)
    }
  }
}
</script>
<style>
.q{
  background: url('./images/username-red.png')
}
.flex{
  display: flex;
  position: fixed;
  transform: translate(-50%,-50%);
  top: 50%;
  left: 50%;
}
.left{
  box-shadow: 0px 0px 18px 0px  rgba(0, 0, 0, 0.1);
  text-align: center;
  line-height: 540px;
  color:white;
  font-size: 34px;
  width: 400px;
  height: 540px;
  background: rgb(121, 181, 189);
  border-top-left-radius:30px;
  border-bottom-left-radius:30px;
}
.button{
  width: 100%
}
.title{
  font-weight: bold;
  color: rgb(0, 110, 255);
  font-size: 32px;
  text-align: center;
  margin-bottom: 120px;
}
.margin-bottom-20px{
  margin-bottom: 30px;
}
.box{
  box-shadow: 0px 0px 18px 0px  rgba(0, 0, 0, 0.1);
  box-sizing: border-box;
  border-bottom-right-radius: 30px;
  border-top-right-radius: 30px;
  padding: 68px;
  width:460px;
  height: 540px;
  background: white;
}
</style>
