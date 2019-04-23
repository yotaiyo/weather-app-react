const tableAcquisition = (props) => {
  if (props.forecasts) {
    return props.forecasts.map(forecast => {
      const {date, telop} = forecast

      const temperatureMax = (
        forecast.temperature &&
        forecast.temperature.max &&
        forecast.temperature.max.celsius) ||
        null;
      const temperatureMin = (
          forecast.temperature &&
          forecast.temperature.min &&
          forecast.temperature.min.celsius) ||
          null;
      return {
        date,
        telop,
        temperatureMax,
        temperatureMin
      }
    });
  };
}

export default tableAcquisition;
