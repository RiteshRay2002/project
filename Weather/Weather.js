const inputbox = document.querySelector('.input_box');
const searchBtn = document.getElementById('serbtn');
const weather_image = document.querySelector('.weather_image');
const temprature = document.querySelector('.temp');
const description = document.querySelector('.descr');
const humidity = document.getElementById('humidity');
const wind_speed = document.getElementById('wind_speed');
const error = document.querySelector('.error');
const weather_body = document.querySelector('.weather_body');

async function checkWeather(city) {
    const api_key = "4d699b24359e2680f550a74d6939a9fb";
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${api_key}`

    const weather_data = await fetch(`${url}`).then(Response => Response.json());


    if (weather_data.cod === `404`) {


        error.style.display = "flex";
        weather_body.style.display = "none";
        console.log("error");
        return;
    }
    error.style.display = "none";
    weather_body.style.display = "flex";



    //const weather_data = await fetch(`${url}`).then(Response => Response.json());


    temprature.innerHTML = `${Math.round(weather_data.main.temp - 273.15)}°C`;
    description.innerHTML = `${weather_data.weather[0].description}`;
    humidity.innerHTML = `${weather_data.main.humidity}%`;
    wind_speed.innerHTML = `${weather_data.wind.speed}Km/h`;


    switch (weather_data.weather[0].main) {
        case ' Clouds':
            weather_image.src = "./cloud.png";
            break;
        case 'Clear':
            weather_image.src = "./clear.png";
            break;
        case 'Rain':
            weather_image.src = "./rain.png";
            break;
        case 'Mist':
            weather_image.src = "./mist.png";
            break;
        case 'Snow':
            weather_image.src = "./snow.png";
            break;
        case 'Smoke':
            weather_image.src = "./smoke.png";
            break;

    }


    // console.log(weather_data);
}




searchBtn.addEventListener('click', () => {
    checkWeather(inputbox.value)
});