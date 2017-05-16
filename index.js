const getCurrentCoordinates = ({ timeout = 20000, maximumAge = 1000 }) =>
  new Promise((resolve, reject) => {
    navigator.geolocation.getCurrentPosition(
      position =>
        resolve({
          latitude: position.coords.latitude,
          longitude: position.coords.longitude
        }),
      error => reject(error),
      { timeout, maximumAge }
    );
  });

export default { getCurrentCoordinates };
