// API Wrapper
const API = {
    async getRandomDog() {
        let dogButton = document.querySelector("#dogStatus")
        dogButton.innerHTML = ""
        fetch("https://random.dog/woof.json").then(response => response.json()).then(function (data) {
            const dog = data.url //Handles dog pic or video
            const isVideo = dog.split('.').pop() == "mp4" //splits last element in array

            document.querySelector("#dog").setAttribute("src", dog)
        })
    },
}


// Weather API Wrapper
const WeatherAPI = {
    APIKEY: '3d62fad2cdea331d9c871600eda4d585',
    getCurrentWeather() {
        let lat = 42.3314;
        let lon = 83.0458;
        fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${this.APIKEY}&units=imperial`,
        { method: 'GET' })
        .then(response => response.json())
        .then((data) => { 
            data = { data }
            let city = "Detroit";
            let state = "MI";
            let temp = data.data.main.temp;
            document.querySelector("#weather").innerHTML = `<b>${city}</b> <br> <b>${state}</b> <br> ${temp}`
            console.log(temp)
        })
    }
}

window.onload = function() {
    API.getRandomDog()
    WeatherAPI.getCurrentWeather()
}

document.addEventListener("DOMContentLoaded", function(){
  // add padding top to show content behind navbar
  navbar_height = document.querySelector('.navbar').offsetHeight;
  document.body.style.paddingTop = navbar_height + 'px';
}); 
// DOMContentLoaded  end