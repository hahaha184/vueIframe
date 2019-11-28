
<template>
<el-row>
  <el-col :span="4" id="left"><analysisPart></analysisPart></el-col>
  <el-col :span="20"><router-view/></el-col>
</el-row>
</template>
<script>
import analysisPart from '../components/AnalysisLeft.vue'
export default {
  name: 'AnalysisPart',
  components:{
      analysisPart
  },
  created(){
 this.$eventBus.$emit("titleBar", "analysis");
  }
}
</script>
<style scoped>
    #left{
       text-align: center;
    }
</style>