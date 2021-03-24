const weather = document.querySelector(".js-weather");
const COORDS = 'coords';
const API_KEY = "e022cf97b57aca5bc7cc666ce8b7441e";

function saveCoords(coords) {
    localStorage.setItem(COORDS, JSON.stringify(coords));
};

function getWeather(lat, lon) {
    fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`)
    .then(function(response) {
        return response.json();
    })
    .then(function(json) {
        console.log(json)
        const temperature = json.main.temp;
        const place = json.name;
        weather.innerText = `${temperature}°C @ ${place}`;
    });
};

function handleSucess(position) {
    console.log(position);
    const latitude = position.coords.latitude;
    const longitude = position.coords.longitude;
    const coordsObj = {
        latitude,
        longitude
    };
    saveCoords(coordsObj);
    getWeather(latitude, longitude);
};

function handleFail() {
    console.log('위치 정보 받아오는데 실패했어요..');
};

function askForCoords() {
    navigator.geolocation.getCurrentPosition(handleSucess, handleFail);
};

function loadCoords() {
    const loadedCoords = localStorage.getItem(COORDS);
    if(loadedCoords === null) {
        askForCoords();
    } else {
        const parseCoords = JSON.parse(loadedCoords);
        getWeather(parseCoords.latitude, parseCoords.longitude);
    };
};

function init() {
    loadCoords();
};

init();