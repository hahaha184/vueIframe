<template>
  <h1>大盘分析</h1>
</template>
<script>
export default {
  created(){
      this.$eventBus.$emit("analysisBar", "dapan");
  },
  methods:{
    
  }
}
</script>