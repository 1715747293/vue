<template>
  <div class="vessel">
    <!-- 头部 -->
    <div class="line">
    <div class="left-index">
      <div class="logo">Vue后台管理系统</div>
      <el-input class="input-width" clearable v-model="input" placeholder="请输入内容"></el-input>
       <el-button icon="el-icon-search" circle></el-button>
    </div>
    <div class="name">
          <div class="margin-right-10px"><el-avatar :size="40" :src="circleUrl"></el-avatar></div>
          <el-dropdown>
  <span class="el-dropdown-link white">
    {{text}}<i class="el-icon-arrow-down el-icon--right"></i>
  </span>
    <el-dropdown-menu slot="dropdown">
    <el-dropdown-item>修改密码</el-dropdown-item>
    <el-dropdown-item>退出登录</el-dropdown-item>
      </el-dropdown-menu>
    </el-dropdown>
    </div>
    </div>
    <div class="content">
<!-- 侧边栏 -->
  <el-menu default-active="0" class="el-menu-vertical-demo"  :collapse="isCollapse">
    <el-menu-item index="0" @click="addTab(editableTabsValue,'/index/home','首页')">
    <i class="el-icon-setting"></i>
    <span slot="title">首页</span>
  </el-menu-item>
  <el-submenu index="1" >
    <template slot="title">
      <i class="el-icon-location"></i>
      <span slot="title">导航一</span>
    </template>
    <el-menu-item-group>
      <el-menu-item index="1-1" @click="addTab(editableTabsValue,$event)">选项1</el-menu-item>
      <el-menu-item index="1-2" @click="addTab(editableTabsValue,$event)">选项2</el-menu-item>
    </el-menu-item-group>
      <el-menu-item index="1-3" @click="addTab(editableTabsValue,$event)">选项3</el-menu-item>
  </el-submenu>
  <el-menu-item index="2" data-item="导航二" @click="addTab(editableTabsValue,'/index/demo','导航二')">
    <i class="el-icon-menu"></i>
    <span slot="title">导航二</span>
  </el-menu-item>
  <el-menu-item index="3" @click="addTab(editableTabsValue,'/index/demo1','导航三')">
    <i class="el-icon-document"></i>
    <span slot="title">导航三</span>
  </el-menu-item>
  <el-menu-item index="4" @click="addTab(editableTabsValue,$event)">
    <i class="el-icon-setting"></i>
    <span slot="title">导航四</span>
  </el-menu-item>
  <el-menu-item index="5"  @click="animation(!isCollapse,$event)">
    <i class="el-icon-document"></i>
    <span slot="title">伸缩</span>
  </el-menu-item>
</el-menu>

<!-- 主体 -->
<div class="box-index">
<el-tabs class="content-header"  v-model="editableTabsValue" type="card" closable  @tab-remove="removeTab" @tab-click="pitchOn(editableTabsValue)" >
  <el-tab-pane
    :key="item.name"
    v-for="item in editableTabs"
    :label="item.title"
    :name="item.name"
  >
  <router-view></router-view>
  </el-tab-pane>
</el-tabs>
  </div>
    </div>
    <!-- 回到顶部按钮 -->
    <el-backtop target=".vessel">
      <div
      style="{
        height: 100%;
        width: 100%;
        background-color: #f2f5f6;
        box-shadow: 0 0 6px rgba(0,0,0, .12);
        text-align: center;
        line-height: 40px;
        color: #1989fa;
      }"
    >
      UP
    </div>
    </el-backtop>
  </div>
</template>
<script>
export default {
  name: 'home',
  data () {
    return {
      // 侧边伸缩
      isCollapse: false,
      // 用户信息
      text: 'admin',
      // 检索
      input: '',
      // 标签栏
      circleUrl: 'https://cube.elemecdn.com/3/7c/3ea6beec64369c2642b92c6726f1epng.png',
      // 当前选中下标
      editableTabsValue: '1',
      // 渲染内容数组
      editableTabs: [{
        // 标签页名字
        title: '首页',
        // 下标
        name: '1',
        // 子页面路由
        route: '/index/home'
      }],
      route: ['/index/home'],
      // 当前下标长度
      tabIndex: 1
    }
  },
  methods: {
    // 标签页被选择事件
    pitchOn (e) {
      console.log(this.editableTabsValue)
      // eslint-disable-next-line handle-callback-err
      this.$router.push({path: this.editableTabs[this.editableTabsValue - 1].route}).catch(err => {})
    },
    // 标签增加事件
    addTab (e, c, n) {
      this.push = true
      // debugger
      for (let i in this.editableTabs) {
        // eslint-disable-next-line eqeqeq
        if (this.editableTabs[i].route == c) {
          // eslint-disable-next-line handle-callback-err
          this.$router.push({path: c}).catch(err => {
            this.editableTabsValue = e
          })
          this.editableTabsValue = String(++i)
          this.push = false
        }
      };
      if (this.push) {
        let newTabName = ++this.tabIndex + ''
        this.editableTabs.push({
          title: n,
          name: newTabName,
          route: c
        })
        this.route.push(c)
        // eslint-disable-next-line handle-callback-err
        this.$router.push({path: c}).catch(err => {
          // this.editableTabsValue = e
        })
        console.log(newTabName)
        this.editableTabsValue = newTabName
      }
    },
    // 标签移除事件
    removeTab (targetName) {
      console.log(targetName)
      let tabs = this.editableTabs
      let activeName = this.editableTabsValue
      if (activeName === targetName) {
        tabs.forEach((tab, index) => {
          if (tab.name === targetName) {
            let nextTab = tabs[index + 1] || tabs[index - 1]
            if (nextTab) {
              activeName = nextTab.name
            }
          }
        })
      }
      this.tabIndex -= 1
      this.editableTabsValue = activeName
      this.editableTabs = tabs.filter(tab => tab.name !== targetName)
      console.log(this.editableTabsValue)
      // eslint-disable-next-line eqeqeq
      if (this.editableTabsValue == this.tabIndex) {
        this.$router.push({path: this.editableTabs[this.editableTabsValue - 1].route})
      }
    },
    animation (e) {
      this.isCollapse = e
    }
  },
  created () {
    // eslint-disable-next-line handle-callback-err
    this.$router.push({path: '/index/home'}).catch(err => {
      console.log(1)
    })
  }
}
</script>
<style>
.vessel{
height: 100vh;
overflow-x: hidden;
}
.top-up{
  width: 40px;
  height: 40px;
  background: red;
  position: fixed;
  bottom: 0px
}
#tab-1>.el-icon-close{
  width: 0px !important
}
.box-index{
  width: 100%;
  padding: 20px;
  overflow: hidden;
}
.content-header{
  overflow: hidden;
  width: 100%;
}
.content{
  display: flex
}
.sidebar-animation img{
  margin-top: 5px;
  width: 30px;
  height: 30px;
}
.sidebar-animation{
  -webkit-user-select:none;
  -moz-user-select:none;
  -ms-user-select:none;
  user-select:none;
  transition: all .42s;
  text-align: center;
  line-height: 40px;
  position: absolute;
  right: -60px;
  top: 0px;
  width: 60px;
  height: 40px;
   background: rgb(84, 92, 100) ;
   border-bottom-right-radius: 12px;
}
.sidebar{
  position: relative;
  width: 200px;
  height: calc(100vh - 62px)
}
.el-menu-vertical-demo{
   border-right: 0px;
   max-width: 200px !important;
  position: relative;
  /* height: 100%; */
   min-height: calc(100vh - 62px);
   background: rgb(84, 92, 100);
}
.el-menu-vertical-demo li>div:hover{
  color: black !important
}
.el-menu-vertical-demo div:hover span{
  color: black !important
}
.el-menu-vertical-demo li:hover{
  color: black !important
}
 .el-menu-vertical-demo:not(.el-menu--collapse) {
    background: rgb(84, 92, 100);
    width: 250px;
    min-height: calc(100vh - 62px);
    color: white;
  }
  .el-menu-vertical-demo>li>div{
    color: white;
      background: rgb(84, 92, 100) ;
  }
  .el-menu-vertical-demo li{
    color: white;
      background: rgb(84, 92, 100);
  }
.white{
  color: white
}
.margin-right-10px{
  margin-right: 10px
}
.name{
  display: flex;
  color: white;
  line-height: 40px;
}
.input-width{
  height: 100%;
  box-sizing: border-box;
  width: 300px;
}
.left-index{
  justify-content: space-between;
  width: 604px;
  display: flex;
}
.height {
  height: 7vh;
  box-sizing: border-box;
}
.logo{
  margin-right: 20px;
  width: 200px;
  height: 100%;
  color: white;
  text-align: center;
  font-size: 24px
}
.line{
  box-sizing: border-box;
  padding: 10px 20px;
  width: 100%;
  height: 62px;
  display: flex;
  justify-content: space-between;
  background: rgb(84, 92, 100);
  box-sizing: border-box;
}
</style>
