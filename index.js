const url = 'https://api.openweathermap.org/data/2.5/weather?units=metric&q='
const apiKey = '1e4f5833afe0d5617833659986590dd0'

let search = document.querySelector('.search')
let searchBtn = document.querySelector('.searchBtn')

let imgIcon = document.querySelector('.imgIcon')

let cityName = document.querySelector('.cityName')
let temp = document.querySelector('.temp')
let humidity = document.querySelector('.humidity')
let windSpeed = document.querySelector('.windSpeed')

let icon1 = document.querySelector('.humidWindImg1')
let icon2 = document.querySelector('.humidWindImg2')



try {
    async function getWetherData(city) {
        const response = await fetch(url + city + `&appid=${apiKey}`)

        const data = await response.json()
        cityName.innerHTML = data.name
        temp.innerHTML = `${data.main.temp}°C`
        humidity.innerHTML = `${data.main.humidity}% Humidity`
        windSpeed.innerHTML = `${data.wind.speed} Km/h Wind Speed`
        console.log(data)

        if (data.weather[0].main === "Clouds") {
            imgIcon.src = 'images/Cloud.png'
        } else if (data.weather[0].main === "Rain") {
            imgIcon.src = 'images/rain.png'
        } else if (data.weather[0].main === "Clear") {
            imgIcon.src = 'images/Sun.png'
        } else if (data.weather[0].main === "Snow") {
            imgIcon.src = 'images/snow.png'
        } else if (data.weather[0].main === "Drizzle") {
            imgIcon.src = 'images/drizzle.png'
        } else if (data.weather[0].main === "Thunderstorm") {
            imgIcon.src = 'images/thunder.png'
        }

    }

    searchBtn.addEventListener('click', () => {
        getWetherData(search.value)
        icon1.src = 'images/wind.png'
        icon2.src = 'images/mist.png'
    })

} catch (error) {
    console.log("Error:", error)
    throw errorerror
}


