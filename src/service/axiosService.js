import axios from 'axios';
const BASE_URL = 'http://localhost:8080/api';

const axiosCommon = axios.create({
    baseURL: BASE_URL,
});

const axiosAdmin = axios.create({
    baseURL: BASE_URL + '/admin',
    withCredentials: true,
});

export { axios, axiosCommon, axiosAdmin };
