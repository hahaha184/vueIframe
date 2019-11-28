<template>
  <div id="app">
    <Header></Header>
    <router-view/>
  </div>
</template>

<script>
import Header from './components/header';
export default {
  name: 'app',
  components:{
      Header
  }
}
</script>

<style>
html,body{
  height: 100%;
  width: 100%;
}
html,body,ul,li,a,div,i,span,p,h1,h2,h3,h4,h5{padding: 0;margin: 0;}
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  height: 100%;
}
li{
  list-style: none;
}
</style>
