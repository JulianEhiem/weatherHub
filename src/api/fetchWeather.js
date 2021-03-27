import axios from 'axios';

const URL = 'https://api.openweathermap.org/data/2.5/weather';
// const API_KEY = 'f33a484cf794d08d0148764789aaba32';
const API_KEY = '92a368be320fc5e9a0816ae44a1a686f';

export const fetchWeather = async (query) => {
    const { data } = await axios.get(URL, {
        params: {
            q: query,
            units: 'imperial',
            APPID: API_KEY,
        }
    });

    return data;
}