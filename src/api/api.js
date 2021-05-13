import axios from "axios";
import * as https from "node/http";

process.env.NODE_TLS_REJECT_UNAUTHORIZED = '0';
const Api = axios.create({
    httpsAgent: new https.Agent({
        rejectUnauthorized: false
    }),
    method: "post",
    baseURL: "http://testing.eba-vipxzexh.us-east-2.elasticbeanstalk.com/",
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
