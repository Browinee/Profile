import axios from "axios";
import LocalStorageDB, {ACCESS_TOKEN} from "./localStorageDB";

const http = axios.create({});

http.interceptors.request.use(config => {
    const token = LocalStorageDB.load(ACCESS_TOKEN);
    if (token) {
        config.headers.Authorization = token;
    }
    return config;
});

http.interceptors.response.use(
    response => {
        const {data} = response;
        return data;
    },
    err => {
        const {data, status} = err.response;
        return Promise.reject({
            message: data.message,
            status,
        });
    }
);

export default http;
