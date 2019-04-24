<template>
  <div id="app">
    <TestPage />
  </div>
</template>

<script>
import TestPage from './components/templates/TestPage'

export default {
  name: 'app',
  components: {
    TestPage,
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
