<template>
<div>
<el-row>
  <el-col :span="6" id="logoArea"> 
    <div  @click="logoClick()"><img src="../../public/images/IndexLogo.png" id="logo"/></div>
  </el-col>
<el-col :span="14">
   <el-menu
      :default-active="activeIndex"
      class="el-menu-demo"
      mode="horizontal"
      background-color="#3385ff"
      text-color="#c1daff"
      active-text-color="#fff"
    > 
     <el-menu-item index="1" @click="$router.push({ name: 'home'})">首页</el-menu-item>
      <el-menu-item index="2" @click="$router.push({ name: 'query'})">查询类</el-menu-item>
      <el-menu-item index="3" @click="$router.push({name:'analysis'})">分析类</el-menu-item>
      <el-menu-item index="4" @click="$router.push({name:'monitor'})">监控类</el-menu-item>
      <el-menu-item index="5" @click="$router.push({name:'renqi'})">博士人气</el-menu-item>
      <el-menu-item index="6" @click="$router.push({name:'boshiClass'})">博士学院</el-menu-item>
      <el-menu-item index="7" @click="$router.push({name:'Help'})">帮助反馈</el-menu-item>
      </el-menu>
  </el-col>
  <el-col :span="4"> 
    <div id="logreg"><span @click="Login()">登录</span> / <span @click="Regist()">注册</span></div>
  </el-col>
</el-row>   
    <el-dialog title="欢迎登录" :visible.sync="dialogTableVisible" center :append-to-body='true' :lock-scroll="false" width="24%">
      <login-name></login-name>
    </el-dialog>
</div>
</template>
<script>
import LoginName  from './loginName.vue';
export default {
  
    components: {LoginName},
    name: "navShow",
  data() {
    return {
      activeIndex: "1",
      dialogTableVisible: false
    };
  },
  created() {
    this.$eventBus.$on("titleBar", title => {
      switch (title) {
        case "query":
          this.activeIndex = "2";
          break;
        case "analysis":
          this.activeIndex = "3";
          break;
        case "monitor":
          this.activeIndex = "4";
          break;
        case "renqi":
          this.activeIndex = "5";
          break;
        case "boshiClass":
          this.activeIndex = "6";
          break;
        case "help":
          this.activeIndex = "7";
          break;
        default:
          this.activeIndex = "1";
          this.$router.push({
            name: "home"
          });
          break;
      }
    });
  },
  methods: {
    Regist(){
      console.log("请注册")
    },
    Login(){
     this.dialogTableVisible=true;
    },
    logoClick(){
       this.activeIndex = "1";
       this.$router.push({ name: 'home'});
    },
  }
};
</script>
<style scoped>
#logoArea{
  text-align: center;
}
#logo{
  height: 40px;
    cursor: pointer;
    margin-top: 10px;
}
#logreg{
  height: 60px;
  line-height: 60px;
  cursor: pointer;
  color: #c1daff;
}
#logreg span:hover{
  color: #fff;
}
.el-row {
   background: #3385ff;
   height: 60px;
  }
  .el-col {
    border-radius: 4px;
    height: 60px;
  }
</style>
