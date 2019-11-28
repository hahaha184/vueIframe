<template>
  <h1>免费课程</h1>
</template>
<script>
export default {
  created(){
      this.$eventBus.$emit("classBar", "freeClass");
  },
  methods:{
    
  }
}
</script>