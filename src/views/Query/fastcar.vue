<template>
  <h1>快车查询</h1>
</template>
<script>
export default {
  created(){
      this.$eventBus.$emit("queryBar", "fastcar");
  },
  methods:{
    
  }
}
</script>