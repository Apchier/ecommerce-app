import axios from "axios";

const axiosIntance = axios.create({
    baseURL: "http://localhost:4455",
    timeout: 5000,
    params: {
        key: "aldypanteq",
    }
});

export default axiosIntance