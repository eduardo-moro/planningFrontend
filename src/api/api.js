import axios from "axios";
import {Agent} from "https";

process.env.NODE_TLS_REJECT_UNAUTHORIZED = '0';
const Api = axios.create({
    httpsAgent: new Agent({
        rejectUnauthorized: false
    }),
    method: "post",
    baseURL: "https://planning-backend.azurewebsites.net/",
    headers: {
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Methods": "GET, POST, PATCH, PUT, DELETE, OPTIONS",
        "Access-Control-Allow-Headers": "Origin, Content-Type, X-Auth-Token",
        'Content-Type': 'application/json',
        'userid': "",
        'authorization': {},
    }
});

Api.interceptors.request.use(
    function (config) {
        config.headers["authorization"] = 'Bearer ' + localStorage.getItem("authorization");
        config.headers["userid"] =  localStorage.getItem("userId");
        return config;
    },
    function (error) {
        return Promise.reject(error);
    }
);


export default Api
