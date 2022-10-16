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

window.onload = function() {
    API.getRandomDog()
}


document.addEventListener("DOMContentLoaded", function(){
  // add padding top to show content behind navbar
  navbar_height = document.querySelector('.navbar').offsetHeight;
  document.body.style.paddingTop = navbar_height + 'px';
}); 
// DOMContentLoaded  end