import axios from 'axios';

const API = axios.create({
  baseURL: 'http://localhost:5000/api',
});

// Mock role headers
API.interceptors.request.use((config) => {
  config.headers['role'] = 'investor'; // Change dynamically in real flow
  return config;
});

export default API;
