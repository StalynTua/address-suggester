import axios from 'axios';


export default class AddressSuggesterService {
    static async getDataAddress(
        address: string
    ) {
        return axios
            .get(
                `https://maps.googleapis.com/maps/api/geocode/json?address=${encodeURIComponent(
                    address || ''
                )}&key=${process.env.REACT_APP_GOOGLE_MAPS_API_KEY || ''}`
            )
    }
};

