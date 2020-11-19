class Storage {
    constructor() {
        this.city;
        this.default = 'Monterrey';
    }

    // Get location data
    getLocationData() {
        if(localStorage.getItem('city') === null) {
            this.city = this.default;
        }
        else {
            this.city = localStorage.getItem('city');
        }

        return this.city;
    }

    setLocationData(city) {
        localStorage.setItem('city', city);
    }
}