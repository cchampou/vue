<template>
  <h2>{{ hours }} : {{ minutes }} : {{ seconds }}</h2>
</template>

<script>
export default {
  name: 'Clock',
  data: () => ({
    hours: '00',
    minutes: '00',
    seconds: '00',
  }),
  mounted() {
    this.updateTime();
    this.timer = setInterval(this.updateTime, 1000);
  },
  beforeDestroy() {
    clearInterval(this.timer);
  },
  methods: {
    updateTime() {
      const currentDateTime = new Date();
      this.hours = ('0' + currentDateTime.getHours()).slice(-2);
      this.minutes = ('0' + currentDateTime.getMinutes()).slice(-2);
      this.seconds = ('0' + currentDateTime.getSeconds()).slice(-2);
    }
  }
}
</script>

<style>
</style>
