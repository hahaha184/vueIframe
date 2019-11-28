<template>
  <h1>帮助反馈</h1>
</template>
<script>
export default {
   created() {
    this.$eventBus.$emit("titleBar", "help");
   }
}
</script>