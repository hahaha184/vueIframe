<template>
  <h1>任务投放</h1>
</template>
<script>
export default {
  created(){
      this.$eventBus.$emit("renqiBar", "taskbuild");
  },
  methods:{
    
  }
}
</script>