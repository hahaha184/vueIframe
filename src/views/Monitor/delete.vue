<template>
  <h1>删评监控</h1>
</template>
<script>
export default {
  created(){
      this.$eventBus.$emit("monitorBar", "delete");
  },
  methods:{
    
  }
}
</script>