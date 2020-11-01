<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png">
    <Clock />
    <Weather />
    <Movies />
  </div>
</template>

<script>
import Clock from './components/Clock'
import Weather from './components/Weather';
import Movies from './components/Movies';

export default {
  name: 'App',
  components: {
    Clock,
    Weather,
    Movies,
  },
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
