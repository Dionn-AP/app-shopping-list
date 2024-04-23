import axios from "axios";

// interface IAxios {
//     baseURL: string;
//     timeout: number;
//     headers: unknown;
// }

const api = axios.create({
    baseURL: "http://10.0.0.185:8081",
    timeout: 10000,
    headers: { 'Content-Type': 'application/json' }
});

export default api;