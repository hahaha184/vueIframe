<template>
  <h1>商品监控</h1>
</template>
<script>
export default {
  created(){
      this.$eventBus.$emit("monitorBar", "goods");
  },
  methods:{
    
  }
}
</script>