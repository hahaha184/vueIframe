<template>
  <h1>有问必答</h1>
</template>
<script>
export default {
  created(){
      this.$eventBus.$emit("classBar", "questions");
  },
  methods:{
    
  }
}
</script>