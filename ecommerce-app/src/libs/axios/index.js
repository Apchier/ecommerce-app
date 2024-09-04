import axios from "axios";

const axiosIntance = axios.create({
    baseURL: "http://localhost:4455",
    timeout: 5000,
    headers: {
        "Content-Type": "application/json",
    },
});

export default axiosIntance