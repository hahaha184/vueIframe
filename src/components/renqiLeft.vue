<template>
  <div>
    <el-row class="tac">
      <el-col :span="24">
        <h4 id="title">博士人气</h4>
        <el-menu :default-active="indexTag" class="el-menu-vertical-demo">
          <el-menu-item index="1" @click="$router.push({name:'taskBuild'})">
            <i class="el-icon-menu"></i>
            <span slot="title">任务投放</span>
          </el-menu-item>
          <el-menu-item index="2" @click="$router.push({name:'taskList'})">
            <i class="el-icon-menu"></i>
            <span slot="title">任务列表</span>
          </el-menu-item>
          <el-menu-item index="3"  @click="$router.push({name:'UserCenter'})">
            <i class="el-icon-document"></i>
            <span slot="title">个人中心</span>
          </el-menu-item>
        </el-menu>
      </el-col>
    </el-row>
  </div>
</template>
<script>
export default {
  data(){
    return {
      indexTag:"1"
    }
  },
  created() {
    this.$eventBus.$on("renqiBar", title => {
      if (title === "taskbuild") {
        this.indexTag = "1";
      }
      switch (title) {
        case "taskbuild":
          this.indexTag = "1";
          break;
        case "tasklist":
          this.indexTag = "2";
          break;
        case "usercenter":
          this.indexTag = "3";
          break;
        default:
          this.indexTag = "1";
          this.$router.push({
            name: "taskBuild"
          });
          break;
      }
    });
  },
  methods: {}
};
</script>
<style scoped>
#title {
  margin: 20px 0 10px;
}
</style>