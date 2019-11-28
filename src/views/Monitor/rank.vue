<template>
  <h1>排名监控</h1>
</template>
<script>
export default {
  created(){
      this.$eventBus.$emit("monitorBar", "rank");
  },
  methods:{
    
  }
}
</script>