<template>
  <div>
    Check out those trending movies today !👇 🎬
    <div id="movies">
      <Movie v-for="movie in movies" v-bind:data="movie" v-bind:key="movie.id" />
    </div>
  </div>
</template>

<script>

import Movie from './Movie';


export default {
  name: 'Movies',
  data: () => ({
    movies: null,
  }),
  mounted() {
    fetch('https://api.themoviedb.org/3/trending/all/day?api_key=084b14d81f2f089e535e4faaa1d1cda9')
      .then(response => response.json())
      .then(data => {
        this.movies = data.results.slice(0, 5);
        console.log(data.results);
      })
  },
  components: {
    Movie,
  }
}
</script>

<style>
#movies {
  margin: auto;
  justify-content: center;
  display: flex;
  margin-top: 2rem;
}
</style>