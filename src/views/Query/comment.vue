<template>
  <h1>评价查询</h1>
</template>
<script>
export default {
  created(){
      this.$eventBus.$emit("queryBar", "comment");
  },
  methods:{
    
  }
}
</script>