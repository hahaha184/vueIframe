<template>
  <h1>个人中心</h1>
</template>
<script>
export default {
  created(){
      this.$eventBus.$emit("renqiBar", "usercenter");
  },
  methods:{
    
  }
}
</script>