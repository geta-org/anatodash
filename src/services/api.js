import axios from "axios";

const api = axios.create({
    baseURL: "http://167.71.92.203/anatogame/api/",
    headers: {
        Accept: "application/json",
        "Content-Type": "application/json"
    }
});

export default api;
