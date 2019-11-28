<template>
  <h1>热词分析</h1>
</template>
<script>
export default {
  created(){
      this.$eventBus.$emit("analysisBar", "hotword");
  },
  methods:{
    
  }
}
</script>