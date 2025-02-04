// Select HTML elements in the document
const currentTemp = document.querySelector('#current-temp');
const weatherIcon = document.querySelector('#weather-icon');
const captionDesc = document.querySelector('figcaption');

// API URL with query parameters for Trier, Germany
const url = 'https://api.openweathermap.org/data/2.5/weather?lat=49.75&lon=6.64&units=imperial&appid=23c5b55d5da420cffada3e9319b79193';

// Fetch weather data from the API
async function apiFetch() {
  try {
    const response = await fetch(url);
    if (response.ok) {
      const data = await response.json();
      console.log(data); // For testing
      displayResults(data); // Display results in the HTML
    } else {
      throw Error(await response.text());
    }
  } catch (error) {
    console.log(error);
  }
}

// Display the weather data in the HTML
function displayResults(data) {
  currentTemp.innerHTML = `${data.main.temp}&deg;F`; // Display temperature
  const iconsrc = `https://openweathermap.org/img/w/${data.weather[0].icon}.png`; // Icon URL
  let desc = data.weather[0].description; // Weather description

  // Set attributes for the weather icon
  weatherIcon.setAttribute('src', iconsrc);
  weatherIcon.setAttribute('alt', desc);

  // Capitalize the first letter of the description
  captionDesc.textContent = `${desc.charAt(0).toUpperCase() + desc.slice(1)}`;
}

// Call the apiFetch function to start the process
apiFetch();