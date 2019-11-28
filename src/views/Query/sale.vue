<template>
  <h1>销量查询</h1>
</template>
<script>
export default {
  created(){
      this.$eventBus.$emit("queryBar", "sale");
  },
  methods:{
    
  }
}
</script>