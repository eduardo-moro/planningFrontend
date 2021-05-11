import axios from "axios";

const Api = axios.create({
    baseURL: "http://testing.eba-vipxzexh.us-east-2.elasticbeanstalk.com/",
    headers: {
        authentication: {
            firebaseToken: ""
        },
        userId: ""
    }
})

export default Api;
