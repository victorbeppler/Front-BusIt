import axios from "axios";

const baseBack = axios.create({
    baseURL: "http://159.223.194.61:3000/api",
});

export default baseBack;