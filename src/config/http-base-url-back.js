import axios from "axios";

const baseBack = axios.create({
    baseURL: "http://159.223.194.61:3005/api",
});

export default baseBack;