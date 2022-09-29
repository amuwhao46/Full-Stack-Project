// API Wrapper
const API = {
    async getRandomDog() {
        fetch("https://random.dog/woof.json").then(response => response.json()).then(function (data) {
            const dog = data.url //Handles dog pic or video
            const isVideo = dog.split('.').pop() == "mp4" //splits last element in array

            document.querySelector("#dog").setAttribute("src", dog)
        })
    },
}

window.onload = function() {
    API.getRandomDog()
}