function setTimeoutPromise(resolveAfter) {
  return new Promise((resolve) => {
    setTimeout(() => {
      console.log(setTimeoutPromise);
      resolve();
    }, 1000);
  });
}

setTimeoutPromise(8)
  .then((timeoutputData) => {
    console.log(timeoutputData);
  })

  .catch((error) => {
    console.log(error);
  });

const getCurrentPosition = () => {
  return new Promise((resolve, reject) => {
    navigator.geolocation.getCurrentPosition(resolve, reject);
  });
};
getCurrentPosition()
  .then((position) => {
    console.log(
      `Latitude: ${position.coords.latitude}; 
      Longitude: ${position.coords.longitude}`
    );
  })
  .catch((error) => {
    console.log(error);
  });
