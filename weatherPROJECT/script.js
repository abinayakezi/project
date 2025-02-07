document.getElementById('getWeather').addEventListener('click', () => {
    const city = document.getElementById('city').value;
    const apiKey = "b96415bc7714423485f26905ff04875e"; // Replace with your OpenWeather API key
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
  
  
    if (city === '') {
      alert('Please enter a city name.');
      return;
    }
  
    fetch(url)
      .then(response => response.json())
      .then(data => {
        if (data.cod === 200) {
          const { name, main, weather } = data;
          const result = `
            <h3>${name}</h3>
            <p><strong>Temperature:</strong> ${main.temp}°C</p>
            <p><strong>Humidity:</strong> ${main.humidity}%</p>
            <p><strong>Condition:</strong> ${weather[0].description}</p>
          `;
          document.getElementById('weatherResult').innerHTML = result;
        } else {
          document.getElementById('weatherResult').innerHTML = `<p>${data.message}</p>`;
        }
      })
      .catch(error => {
        console.error('Error fetching weather data:', error);
        document.getElementById('weatherResult').innerHTML = `<p>Error fetching data. Please try again.</p>`;
      });
  });
  