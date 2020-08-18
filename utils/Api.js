import Config from "../Config";
const { host } = Config;

class Api {
    getCityHotels(city) {
        const url = `${host}/api/hotels/city/${city}`;
        return fetch(url)
            .then(res => res.json())
            .then(json => ({ hotels: json.results }));
    }    
    
    getHotelDetails(hotel) {
        const url = `${host}/api/hotels/${hotel}`;
        return fetch(url)
            .then(res => res.json())
            .then(json => json.result);
    }
}

export default new Api();