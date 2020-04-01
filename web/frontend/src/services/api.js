import axios from 'axios';

const api = axios.create({
    baseURL: 'https://boring-rosalind-4b9063.netlify.com',
})

export default api;