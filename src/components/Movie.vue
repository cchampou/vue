<template>
  <section v-on:click="goToMovie">
    <img v-bind:src="poster" />
    <p>{{ data.title || data.name }}</p>
  </section>
</template>

<script>
export default {
  name: 'Movie',
  props: {
    data: Object,
  },
  methods: {
    goToMovie() {
      window.open(`https://www.themoviedb.org/${this.data.media_type}/${this.data.id}`);
    }
  },
  computed: {
    poster() {
      return 'https://image.tmdb.org/t/p/w500/'+this.data.poster_path;
    }
  },
};
</script>

<style lang="scss" scoped>

@import "../styles/theme";

section {
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 1rem;
  cursor: pointer;
}

img:hover {
  transform: scale(1.05);
  box-shadow: $box-shadow-higher;
}

img {
  height: 20rem;
  width: auto;
  border-radius: $border-radius;
  box-shadow: $box-shadow;
  transition: all 0.2s ease;
}

p {
  font-size: 1.25rem;
}
</style>