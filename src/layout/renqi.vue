
<template> 
<el-row>
  <el-col :span="4" id="left"><renqiLeft></renqiLeft></el-col>
  <el-col :span="20"><router-view/></el-col>
</el-row>
</template>
<script>
import renqiLeft from '../components/renqiLeft.vue'
export default {
  name: 'RenqiPart',
  components:{
      renqiLeft,
  },
   created() {
    this.$eventBus.$emit("titleBar", "renqi");
   }
}
</script>
<style scoped> 
    #left{
       text-align:  center;
    }
</style>