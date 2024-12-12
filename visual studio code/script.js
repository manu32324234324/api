const apiKey = 'TU_CLAVE_API';
const city = 'Madrid';
const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`;

fetch(url)
    .then(response => response.json())
    .then(data => {
        const content = document.getElementById('content');
        content.innerHTML = `<p>El clima en ${city} es ${data.weather[0].description}.</p>`;
    })
    .catch(error => console.error('Error:', error));