
<template>
<el-row>
  <el-col :span="4" id="left"><monitorPart></monitorPart></el-col>
  <el-col :span="20"><router-view/></el-col>
</el-row>
</template>
<script>
import monitorPart from '../components/monitorLeft.vue'
export default {
  name: 'MonitorPart',
  components:{
      monitorPart
  },
   created() {
    this.$eventBus.$emit("titleBar", "monitor");
   }
}
</script>
<style scoped>
    #left{
       text-align: center;
    }
</style>