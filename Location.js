import 'react-native';

/**
  * Get current coordinates
  * @param {object} options - Options object
  * @return {Promise}
  */
const getCurrentCoordinates = options => {
  let effectiveOptions = options;

  if (!options) {
    effectiveOptions = {
      timeout: 20000,
      maximumAge: 1000
    };
  }

  return new Promise((resolve, reject) => {
    navigator.geolocation.getCurrentPosition(
      position =>
        resolve({
          latitude: position.coords.latitude,
          longitude: position.coords.longitude
        }),
      error => reject(error),
      effectiveOptions
    );
  });
};

export default { getCurrentCoordinates };
