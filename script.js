document.getElementById('getWeather').addEventListener('click', () => {
    const city = document.getElementById('city').value;
    const apiKey = '58352dd13a160c34c725304a7e5a2bea';
    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric&lang=pt_br`;

    fetch(apiUrl)
        .then(response => response.json())
        .then(data => {
            if (data.cod === 200) {
                const weatherData = `
                    <h2>${data.name}, ${data.sys.country}</h2>
                    <p>Temperatura: ${data.main.temp}°C</p>
                    <p>Descrição: ${data.weather[0].description}</p>
                    <p>Umidade: ${data.main.humidity}%</p>
                    <p>Vento: ${data.wind.speed} m/s</p>
                `;
                document.getElementById('weather').innerHTML = weatherData;
            } else {
                document.getElementById('weather').innerHTML = `<p>${data.message}</p>`;
            }
        })
        .catch(error => {
            console.error('Erro ao obter a previsão do tempo:', error);
            document.getElementById('weather').innerHTML = `<p>Erro ao obter a previsão do tempo. Tente novamente.</p>`;
        });
});

// Alterar Tema

// Função para definir o papel de parede baseado no horário
function setWallpaper() {
    // Obtém a hora atual
    const now = new Date();
    const hours = now.getHours();
    const body = document.body;

    // Remove classes existentes de papel de parede
    body.classList.remove('morning', 'afternoon', 'evening', 'night');

    // Define o papel de parede baseado no horário
    if (hours >= 6 && hours < 12) {
        body.classList.add('morning'); // Manhã: 6h - 12h
    } else if (hours >= 12 && hours < 17) {
        body.classList.add('afternoon'); // Tarde: 12h - 17h
    } else if (hours >= 17 && hours < 18) {
        body.classList.add('evening'); // Noite: 17h - 18h
    } else {
        body.classList.add('night'); // Madrugada: 18h - 6h
    }
}

// Chama a função ao carregar a página
window.onload = setWallpaper;

// Opcional: Atualiza o papel de parede a cada hora
setInterval(setWallpaper, 3600000); // 3600000 ms = 1 hora

// Alterar Tema
