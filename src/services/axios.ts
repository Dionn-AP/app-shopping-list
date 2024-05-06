import axios from "axios";

// interface IAxios {
//     baseURL: string;
//     timeout: number;
//     headers: unknown;
// }

const api = axios.create({
    baseURL: "https://shopping-list-server-ow3k.onrender.com",
    timeout: 10000,
    headers: { 'Content-Type': 'application/json' }
});

export default api;