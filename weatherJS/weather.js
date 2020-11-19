class Weather {
    constructor(city, country) {
        this.apiKey = '4a9b9be189fbb34ad62115b7eb6113bd';
        this.city = city;
    }

    // Fetch weather from API
    async getWeather() {
        const response = await fetch(`http://api.openweathermap.org/data/2.5/weather?q=${this.city}&appid=${this.apiKey}`);
        const responseData = await response.json();
        return responseData;
    }

    // Change weather location
    changeLocation(city) {
        this.city = city;
    }
}