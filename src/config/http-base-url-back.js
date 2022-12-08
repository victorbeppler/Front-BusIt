import axios from "axios";

const baseBack = axios.create({
    baseURL: "https://admin.victorbeppler.dev/api",
});

export default baseBack;