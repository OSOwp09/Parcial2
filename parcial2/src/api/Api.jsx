import axios from "axios";

export const PhotApi = axios.create({
    baseURL: 'https://jsonplaceholder.typicode.com/photos'
})