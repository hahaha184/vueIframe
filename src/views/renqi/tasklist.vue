<template>
  <h1>任务列表</h1>
</template>
<script>
export default {
  created(){
      this.$eventBus.$emit("renqiBar", "tasklist");
  },
  methods:{
    
  }
}
</script>