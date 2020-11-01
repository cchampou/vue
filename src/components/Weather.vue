<template>
  <section class="widget" id="weather-widget">
    <font-awesome-icon v-if="icon" v-bind:icon="icon" />
    <span v-if="temperature" id="temperature">{{ temperature }}°C</span>‍️
  </section>
</template>
<script>

import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import { faMoon, faSun, faCloudMoon, faCloudSun } from '@fortawesome/free-solid-svg-icons';
import { getWeatherIcon, toCelcius } from '@/utils/weather';

library.add(faMoon);
library.add(faSun);
library.add(faCloudMoon);
library.add(faCloudSun);

const getTemperature = apiResponse => apiResponse.main.temp;
const getWeatherCondition = apiResponse => apiResponse.weather[0].main;

export default {
  name: 'Weather',
  data: () => ({
    temperature: null,
    icon: null,
  }),
  mounted() {
    fetch('https://api.openweathermap.org/data/2.5/weather?q=lyon&appid=53e8a819699d0094992ec637bb9ec813')
      .then(response => response.json())
      .then(data => {
        this.temperature = Math.ceil(toCelcius(getTemperature(data)));
        this.icon = getWeatherIcon(getWeatherCondition(data));
      });
  },
  components: {
    FontAwesomeIcon,
  }
}
</script>

<style lang="scss">

@import "../styles/theme";

.widget {
  background-color: $primary;
  color: white;
  padding: 10px 20px;
  border-radius: $border-radius;
  box-shadow: $box-shadow;
  font-size: 1.3rem;
  margin: 3px;
}

#weather-widget {
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 6rem;
}

</style>