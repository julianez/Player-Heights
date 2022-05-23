const axios = require('axios');

const apiConfig = {
    returnRejectedPromiseOnError: true,
    timeout: 30000,
    headers: {
        common: {
            'Content-Type': 'application/json',
            'Accept': 'application/json',
        },
    },
};

const request = axios.create(apiConfig);

module.exports = request;