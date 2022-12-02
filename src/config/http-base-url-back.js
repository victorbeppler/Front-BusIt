import axios from "axios";

const baseBack = axios.create({
    baseURL: "http://localhost:3005/api",
});

export default baseBack;