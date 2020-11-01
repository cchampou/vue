<template>
  <div id="app">
    <div id="backdrop"></div>
    <div id="top-bar">
      <Weather />
      <img alt="Vue logo" src="./assets/logo.png" id="logo">
      <Clock />
    </div>
    <h1 id="main-title">Good Morning Clément <font-awesome-icon icon="mug-hot" /></h1>
    <Movies />
  </div>
</template>

<script>
import Clock from './components/Clock'
import Weather from './components/Weather';
import Movies from './components/Movies';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faMugHot } from '@fortawesome/free-solid-svg-icons';

library.add(faMugHot);

export default {
  name: 'App',
  components: {
    Clock,
    Weather,
    Movies,
    FontAwesomeIcon,
  },
}
</script>

<style>

body {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
}

#backdrop {
  height: 100vh;
  width: 100vw;
  position: fixed;
  top: 0;
  left: 0;
  /*background-image: url("./assets/abstract.jpg");*/
  /*background-size: cover;*/
  /*background-position: center;*/
  filter: blur(5px);
  z-index: -1;
}

#logo {
  height: 3rem;
}

#main-title {
  font-size: 2rem;
  font-weight: lighter;
  margin: 10rem;
}

#top-bar {
  display: flex;
  justify-content: space-between;
}
</style>
