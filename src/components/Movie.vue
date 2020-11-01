<template>
  <section>
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
}

img {
  height: 20rem;
  width: auto;
  border-radius: $border-radius;
  box-shadow: $box-shadow;
}

p {
  font-size: 1.25rem;
}
</style>