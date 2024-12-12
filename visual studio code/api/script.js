const apiKey = 'd1d2db35bemsh7d4d0b3dae1ec09p10937ajsn477cd474238b'; // Sustituye por tu clave de la API
const city = 'Madrid';
const url = `curl --request GET \
	--url 'https://api-football-v1.p.rapidapi.com/v2/odds/league/865927/bookmaker/5?page=2' \
	--header 'x-rapidapi-host: api-football-v1.p.rapidapi.com' \
	--header 'x-rapidapi-key: d1d2db35bemsh7d4d0b3dae1ec09p10937ajsn477c4d74238b'{city}&appid=${apiKey}&units=metric`;

fetch(url)
    .then(response => response.json())
    .then(data => {
        const content = document.getElementById('content');
        content.innerHTML = `<p>El clima en ${city} es ${data.weather[0].description} con una temperatura de ${data.main.temp}°C.</p>`;
    })
    .catch(error => console.error('Error:', error));