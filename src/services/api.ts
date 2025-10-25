import axios from 'axios';

const API = axios.create({
  baseURL: '/api', // proxied by Vite to server
  timeout: 8000
});

export default API;
