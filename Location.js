import 'react-native';

/**
  * Get current coordinates
  * @param {object} options - Options object
  * @return {object} coordinates object
  */
const getCurrentCoordinates = ({ timeout, maximumAge }) => {
  const options = {
    timeout: timeout || 20000,
    maximumAge: maximumAge || 1000
  };

  return new Promise((resolve, reject) => {
    navigator.geolocation.getCurrentPosition(
      position =>
        resolve({
          latitude: position.coords.latitude,
          longitude: position.coords.longitude
        }),
      error => reject(error),
      options
    );
  });
};

export default { getCurrentCoordinates };
