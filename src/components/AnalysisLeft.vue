<template>
  <div>
    <el-row class="tac">
      <el-col :span="24">
        <h4 id="title">博士分析</h4>
        <el-menu :default-active="indexTag" class="el-menu-vertical-demo">
          <el-menu-item index="1" @click="$router.push({name:'TitleAnalysis'})">
            <i class="el-icon-data-line"></i>
            <span slot="title">标题分析</span>
          </el-menu-item>
          <el-menu-item index="2" @click="$router.push({name:'HotWordAnalysis'})">
            <i class="el-icon-menu"></i>
            <span slot="title">热词分析</span>
          </el-menu-item>
          <el-menu-item index="3" @click="$router.push({name:'DapanAalysis'})">
            <i class="el-icon-pie-chart"></i>
            <span slot="title">大盘分析</span>
          </el-menu-item>
        </el-menu>
      </el-col>
    </el-row>
  </div>
</template>
<script>
export default {
  data() {
    return {
      indexTag: "1"
    };
  },
  created() {
    this.$eventBus.$on("analysisBar", title => {
      if (title === "dapan") {
        this.indexTag = "1";
      }
      switch (title) {
        case "dapan":
          this.indexTag = "3";
          break;
        case "hotword":
          this.indexTag = "2";
          break;
        case "title":
          this.indexTag = "1";
          break;
        default:
          this.indexTag = "1";
          this.$router.push({
            name: "TitleAnalysis"
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