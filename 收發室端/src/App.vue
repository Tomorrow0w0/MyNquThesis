<template>
  <div id="app">
    <Navbar/>
      <div id="container">
        <router-view/>
      </div>
  </div>
</template>

<script>
  import Navbar from "./components/Navbar/Navbar";
  export default {
    name: 'App',
    components: {
      Navbar
    }
  }
</script>

<style>

</style>
