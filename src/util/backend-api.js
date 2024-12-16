const axios = require('axios');

const BASE_URL = 'https://panel.theijire.com/api/';

// Create an Axios instance
const instance = axios.create({
    baseURL: BASE_URL,
    timeout: 10000, // Timeout to prevent infinite waits
    headers: {
        'Content-Type': 'application/json', // Default content type
        'Access-Control-Allow-Origin': '*', // Allow CORS
    },
});

// Interceptor for requests
instance.interceptors.request.use(
    (config) => config,
    (error) => Promise.reject(error)
);

// Interceptor for responses
instance.interceptors.response.use(
    (response) => response,
    (error) => {
        console.error('API Error:', error.response || error.message);
        return Promise.reject(error);
    }
);

// API Service Methods
// export default {
//     postData(action, data = {}) {
//         // Always use POST for API requests
//         const url = `${action}`;
//         return instance.post(url, data);
//     },
//     postDataModulePagination(action, data) {
//         let url = `${action}`;
//         return instance.post(url, data); // Use POST and include data as the request body
//       }
      
// };


const apiService = {
    postData(action, data = {}) {
      const url = `${action}`;
      return instance.post(url, data);
    },
    postDataModulePagination(action, data) {
      let url = `${action}`;
      return instance.post(url, data);
    }
  };
  
  module.exports = apiService;
  