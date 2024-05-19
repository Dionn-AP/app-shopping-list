import axios from "axios";

const api = axios.create({
    baseURL: "https://shopping-list-server-ow3k.onrender.com",
    //baseURL: "http://192.168.141.212:8000",
    timeout: 10000,
    headers: { 'Content-Type': 'application/json' }
});

export default api;