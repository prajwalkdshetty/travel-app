const axios = require('axios');

export const api = axios.create({
  baseURL: 'http://localhost:4000/',
  // baseURL: 'https://jsonplaceholder.typicode.com/',
  timeout: 120000,
  headers: {'content-type': 'application/json'}
});

