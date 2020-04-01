import axios from 'axios';

const api = axios.create({
    baseURL: 'https://vigorous-franklin-6e8a0b.netlify.com',
})

export default api;