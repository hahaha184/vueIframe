<template>
  <h1>排名查询</h1>
</template>
<script>
export default {
  created(){
      this.$eventBus.$emit("queryBar", "rank");
  },
  methods:{
    
  }
}
</script>