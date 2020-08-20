import Config from "../Config";
const { host } = Config;

class Api {
    async getCityHotels(city) {
        const url = `${host}/api/hotels/city/${city}`;
        const res = await fetch(url);
        const json = await res.json();
        return ({ hotels: json.results })
    }
    
    async getHotelDetails(hotel) {
        const url = `${host}/api/hotels/${hotel}`;
        const res = await fetch(url);
        const json = await res.json();        
        return json.result;
    }
}

export default new Api();