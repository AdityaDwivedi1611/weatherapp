// const url = 'https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=Seattle';
const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '5527692302mshbd862a1452d9abcp1b5283jsnad0a5745778a',
		'X-RapidAPI-Host': 'weather-by-api-ninjas.p.rapidapi.com'
	}
};
const getWeather = (city) => {
	cityname.innerHTML=city
	fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city='+city, options)
		.then(response => response.json())
		.then(response => {
			console.log(response)
			// cloud_pct.innerHTML = response.cloud_pct
			temp.innerHTML = response.temp
			temp2.innerHTML = response.temp
			feels_like.innerHTML = response.feels_like
			humidity.innerHTML = response.humidity
			humidity2.innerHTML = response.humidity
			min_temp.innerHTML = response.min_temp
			max_temp.innerHTML = response.max_temp
			wind_speed.innerHTML = response.wind_speed
			wind_speed2.innerHTML = response.wind_speed
			wind_degrees.innerHTML = response.wind_degrees
			sunrise.innerHTML = response.sunrise
			sunset.innerHTML = response.sunset
			const humidityvalue = parseFloat(response.humidity);
			
		})
		.catch(err => console.error(err));
}
submit.addEventListener("click",(e)=>{
	e.preventDefault()
	getWeather(city.value)
})
getWeather("Delhi")

const getWeatherForPune = () => {
	fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=Pune', options)
	  .then(response => response.json())
	  .then(response => {
		// Update HTML elements for "Pune" weather data
		cloud_pct3.innerHTML = response.cloud_pct;
		Feels_like3.innerHTML = response.feels_like;
		humitidty3.innerHTML = response.humidity;
		max_temp3.innerHTML = response.max_temp;
		min_temp3.innerHTML = response.min_temp;
		sunrise3.innerHTML = response.sunrise;
		sunset3.innerHTML = response.sunset;
		temp3.innerHTML = response.temp;
		wind_degrees3.innerHTML = response.wind_degrees;
		wind_speed3.innerHTML = response.wind_speed;
	  })
	  .catch(err => console.error(err));
  };
  
  // Call the function to fetch and display weather data for "Pune" when the page loads
  getWeatherForPune();
  const getWeatherForFatehpur = () => {
	fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=Fatehpur', options)
	  .then(response => response.json())
	  .then(response => {
		// Update HTML elements for "Pune" weather data
		cloud_pct4.innerHTML = response.cloud_pct;
		Feels_like4.innerHTML = response.feels_like;
		humitidty4.innerHTML = response.humidity;
		max_temp4.innerHTML = response.max_temp;
		min_temp4.innerHTML = response.min_temp;
		sunrise4.innerHTML = response.sunrise;
		sunset4.innerHTML = response.sunset;
		temp4.innerHTML = response.temp;
		wind_degrees4.innerHTML = response.wind_degrees;
		wind_speed4.innerHTML = response.wind_speed;
	  })
	  .catch(err => console.error(err));
  };
  
  // Call the function to fetch and display weather data for "Pune" when the page loads
  getWeatherForFatehpur();
  const getWeatherForLucknow = () => {
	fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=Lucknow', options)
	  .then(response => response.json())
	  .then(response => {
		// Update HTML elements for "Pune" weather data
		cloud_pct5.innerHTML = response.cloud_pct;
		Feels_like5.innerHTML = response.feels_like;
		humitidty5.innerHTML = response.humidity;
		max_temp5.innerHTML = response.max_temp;
		min_temp5.innerHTML = response.min_temp;
		sunrise5.innerHTML = response.sunrise;
		sunset5.innerHTML = response.sunset;
		temp5.innerHTML = response.temp;
		wind_degrees5.innerHTML = response.wind_degrees;
		wind_speed5.innerHTML = response.wind_speed;
	  })
	  .catch(err => console.error(err));
  };
  
  // Call the function to fetch and display weather data for "Pune" when the page loads
  getWeatherForLucknow();
  