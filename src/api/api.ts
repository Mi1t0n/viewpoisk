import axios from 'axios';

export const instance = axios.create({
    baseURL: 'https://kinopoiskapiunofficial.tech/api/v2.2/',
    headers: {
        'accept': 'application/json',
        'X-API-KEY': '8c8e1a50-6322-4135-8875-5d40a5420d86'
    }
});
