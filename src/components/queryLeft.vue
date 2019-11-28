<template>
  <div>
    <el-row class="tac">
      <el-col :span="24">
        <h4 id="title">博士查询</h4>
        <el-menu :default-active="indexTag" class="el-menu-vertical-demo">
          <el-menu-item index="1" @click="$router.push({name:'Rankquery'})">
            <i class="el-icon-menu"></i>
            <span slot="title">排名查询</span>
          </el-menu-item>
          <el-menu-item index="2" @click="$router.push({name:'Commentquery'})">
            <i class="el-icon-menu"></i>
            <span slot="title">评价查询</span>
          </el-menu-item>
          <el-menu-item index="3" @click="$router.push({name:'Salequery'})">
            <i class="el-icon-document"></i>
            <span slot="title">销量查询</span>
          </el-menu-item>
          <el-menu-item index="4" @click="$router.push({name:'Weightquery'})">
            <i class="el-icon-setting"></i>
            <span slot="title">权重查询</span>
          </el-menu-item>
          <el-menu-item index="5" @click="$router.push({name:'Fastcarquery'})">
            <i class="el-icon-setting"></i>
            <span slot="title">快车查询</span>
          </el-menu-item>
        </el-menu>
      </el-col>
    </el-row>
  </div>
</template>
<script>
export default {
  data(){
    return{
      indexTag:"1"
    }
  },
  created() {
    this.$eventBus.$on("queryBar", title => {
      if (title === "rank") {
        this.indexTag = "1";
      }
      switch (title) {
        case "fastcar":
          this.indexTag = "5";
          break;
        case "weight":
          this.indexTag = "4";
          break;
        case "sale":
          this.indexTag = "3";
          break;
        case "comment":
          this.indexTag = "2";
          break;
        case "rank":
          this.indexTag = "1";
          break;
        default:
          this.indexTag = "1";
          this.$router.push({
            name: "Rankquery"
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