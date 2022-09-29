// API Wrapper
const API = {
    async getRandomDog() {
        try {
            const response = await fetch("https://random.dog/woof.json");
            const data = await response.json();
            console.log(data)
        } catch (e) {
            console.log(e)
        }
    },
}