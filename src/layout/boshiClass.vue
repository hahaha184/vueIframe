
<template>
<el-row>
  <el-col :span="4" id="left"><classLeft></classLeft></el-col>
  <el-col :span="20"><router-view/></el-col>
</el-row>
</template>
<script>
import classLeft from '../components/classLeft.vue'
export default {
  name: 'classPart',
  components:{
      classLeft
  },
   created() {
    this.$eventBus.$emit("titleBar", "boshiClass");
   }
}
</script>
<style scoped>
    #left{
       text-align: center;
    }
</style>