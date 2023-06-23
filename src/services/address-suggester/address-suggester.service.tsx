import axios from 'axios';


export default class AddressSuggesterService {
    static async getDataAddress(
        address: string
    ) {
        return axios
            .get(
                `https://maps.googleapis.com/maps/api/geocode/json?address=${encodeURIComponent(
                    address || ''
                )}&key=AIzaSyDZSfPspkndSN419jqUy5NB3Z-hTW9ulR0`
            )
    }
};

