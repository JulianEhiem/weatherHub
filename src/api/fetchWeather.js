import axios from 'axios';
require('dotenv').config();



const URL = 'https://api.openweathermap.org/data/2.5/weather';
const API_KEY = '92a368be320fc5e9a0816ae44a1a686f';
// const API_KEY = process.env.API_KEY;

export const fetchWeather = async (query) => {

    const  { data }  = await axios({
        method: 'get',
        url: URL,
        params: {
            q: query,
            units: 'imperial',
            APPID: API_KEY,
        }
    });

    return data;
}
