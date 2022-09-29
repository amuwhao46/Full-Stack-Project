// API Wrapper
const API = {
    async getRandomDog() {
        fetch("https://random.dog/woof.json").then(response => response.json()).then(function (data) {
            const dog = data.url
        })
    },
}