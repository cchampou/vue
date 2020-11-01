export const toCelcius = temp => temp - 273.15;

export const getWeatherIcon = weatherString => {
  const currentHour = new Date().getHours();
  switch (weatherString) {
    case 'Clear':
      if (currentHour <= 6 || currentHour >= 20) {
        return 'moon';
      }
      return 'sun';
    case 'Clouds':
      if (currentHour <= 6 || currentHour >= 20) {
        return 'cloud-moon';
      }
      return 'cloud-sun';
    default:
      return 'sun';
  }
};