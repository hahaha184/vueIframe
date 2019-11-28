<template>
  <h1>交流中心</h1>
</template>
<script>
export default {
  created(){
      this.$eventBus.$emit("classBar", "talk");
  },
  methods:{
    
  }
}
</script>