<template>
  <h1>权重查询</h1>
</template>
<script>
export default {
  created(){
      this.$eventBus.$emit("queryBar", "weight");
  },
  methods:{
    
  }
}
</script>