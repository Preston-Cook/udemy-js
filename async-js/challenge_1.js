function whereAmI(lat, lng) {
  fetch(`https://geocode.xyz/${lat},${lng}?geoit=json`)
    .then((res) => {
      if (!res.ok) {
        throw new Error(`Problem with geocoding, code ${res.status}`);
      }
      return res.json();
    })
    .then((data) => {
      console.log(data);
      console.log(`You are in ${data?.city}, ${data?.state}`);
      return fetch(`https://restcountries.com/v3.1/name/usa`);
    })
    .then((res) => {
      if (!res.ok) {
        throw new Error(`Problem with geocoding, code ${res.status}`);
      }
      return res.json();
    })
    .then((data) => {
      const [jsonData] = data;
      console.log(jsonData.name.common);
    })
    .catch((err) => {
      console.log(err);
    });
}

navigator.geolocation.getCurrentPosition(
  (pos) => {
    const { latitude, longitude } = pos.coords;
    whereAmI(latitude, longitude);
  },
  () => {
    alert("Unable to get current location");
  }
);
