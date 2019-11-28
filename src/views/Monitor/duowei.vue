<template>
  <h1>多维监控</h1>
</template>
<script>
export default {
  created(){
      this.$eventBus.$emit("monitorBar", "duowei");
  },
  methods:{
    
  }
}
</script>