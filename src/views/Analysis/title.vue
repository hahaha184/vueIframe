<template>
  <h1>标题分析</h1>
</template>
<script>
export default {
  created(){
      this.$eventBus.$emit("analysisBar", "title");
  },
  methods:{
    
  }
}
</script>