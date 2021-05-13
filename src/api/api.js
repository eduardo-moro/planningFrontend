import axios from "axios";

const Api = axios.create({
    method: "post",
    baseURL: "http://testing.eba-vipxzexh.us-east-2.elasticbeanstalk.com/",
    headers: {
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
