function displayTemperature(response) {
  console.log(response.data);
}

let apiKey = "23299a9890a18af9b64db3fe1ab69a3a";
let apiUrl = `api.openweathermap.org/data/2.5/weather?q=Berlin&appid=${apiKey}units=metric`;
console.log(apiUrl);
axios.get(apiUrl).then(displayTemperature);
