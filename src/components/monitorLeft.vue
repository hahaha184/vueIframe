<template>
  <div>
    <el-row class="tac">
      <el-col :span="24">
        <h4 id="title">博士监控</h4>
        <el-menu :default-active="indexTag" class="el-menu-vertical-demo">
          <el-menu-item index="1" @click="$router.push({name:'Rankmonitor'})">
            <i class="el-icon-c-scale-to-original"></i>
            <span slot="title">排名监控</span>
          </el-menu-item>
          <el-menu-item index="2" @click="$router.push({name:'Deletemonitor'})">
            <i class="el-icon-menu"></i>
            <span slot="title">删评监控</span>
          </el-menu-item>
          <el-menu-item index="3"  @click="$router.push({name:'Duoweimonitor'})">
            <i class="el-icon-data-analysis"></i>
            <span slot="title">多维监控</span>
          </el-menu-item>
          <el-menu-item index="4"  @click="$router.push({name:'Goodsmonitor'})">
            <i class="el-icon-coordinate"></i>
            <span slot="title">商品监控</span>
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
    this.$eventBus.$on("monitorBar", title => {
      if (title === "rank") {
        this.indexTag = "1";
      }
      switch (title) {
        case "goods":
          this.indexTag = "4";
          break;
        case "duowei":
          this.indexTag = "3";
          break;
        case "delete":
          this.indexTag = "2";
          break;
        case "rank":
          this.indexTag = "1";
          break;
        default:
          this.indexTag = "1";
          this.$router.push({
            name: "Rankmonitor"
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