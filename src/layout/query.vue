
<template>
<el-row>
  <el-col :span="4" id="left"><queryLeft></queryLeft></el-col>
  <el-col :span="20"><router-view/></el-col>
</el-row>
</template>
<script>
import queryLeft from '../components/queryLeft.vue'
export default {
  name: 'QueryPart',
  components:{
      queryLeft
  },
    created() {
    this.$eventBus.$emit("titleBar", "query");
    }
}
</script>
<style scoped> 
    #left{
       text-align:  center;
    }
</style>