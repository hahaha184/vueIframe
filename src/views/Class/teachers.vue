<template>
  <h1>讲师中心</h1>
</template>
<script>
export default {
  created(){
      this.$eventBus.$emit("classBar", "teachers");
  },
  methods:{
    
  }
}
</script>