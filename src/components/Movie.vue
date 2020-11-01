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
  mounted() {
    // console.log(this.data);
  }
};
</script>

<style scoped>
section {
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 1rem;
}

img {
  height: 20rem;
  width: auto;
  border-radius: 20px;
  box-shadow: 0 0 10px #BBBBBB;
}

p {
  font-size: 1.25rem;
}
</style>