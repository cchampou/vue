<template>
  <div>
    <h2 class="section-title"><font-awesome-icon icon="film" /> Trending movies</h2>
    <div id="movies">
      <Movie v-for="movie in movies" v-bind:data="movie" v-bind:key="movie.id" />
    </div>
  </div>
</template>

<script>

import Movie from './Movie';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faFilm } from '@fortawesome/free-solid-svg-icons';

library.add(faFilm)

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
    FontAwesomeIcon,
  }
}
</script>

<style lang="scss">

@import "../styles/theme";

#movies {
  margin: auto;
  justify-content: center;
  display: flex;
  margin-top: 2rem;
}

.section-title {
  text-align: left;
  margin-left: 5rem;
  font-size: 4rem;
  color: $primary;
  text-shadow: $box-shadow;
}

</style>