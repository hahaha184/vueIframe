<template>
  <div>
    <el-row class="tac">
      <el-col :span="24">
        <h4 id="title">博士学院</h4>
        <el-menu :default-active="indexTag" class="el-menu-vertical-demo">
          <el-menu-item index="1" @click="$router.push({name:'FreeClass'})">
            <i class="el-icon-menu"></i>
            <span slot="title">免费课程</span>
          </el-menu-item>
          <el-menu-item index="2" @click="$router.push({name:'Talk'})">
            <i class="el-icon-mic"></i>
            <span slot="title">交流中心</span>
          </el-menu-item>
          <el-menu-item index="3"  @click="$router.push({name:'Questions'})">
            <i class="el-icon-question"></i>
            <span slot="title">有问必答</span>
          </el-menu-item>
          <el-menu-item index="4"  @click="$router.push({name:'Teachers'})">
            <i class="el-icon-user"></i>
            <span slot="title">讲师中心</span>
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
    this.$eventBus.$on("classBar", title => {
      if (title === "freeClass") {
        this.indexTag = "1";
      }
      switch (title) {
        case "teachers":
          this.indexTag = "4";
          break;
        case "questions":
          this.indexTag = "3";
          break;
        case "talk":
          this.indexTag = "2";
          break;
        case "freeClass":
          this.indexTag = "1";
          break;
        default:
          this.indexTag = "1";
          this.$router.push({
            name: "FreeClass"
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