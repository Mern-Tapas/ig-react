import axios from "axios";


const instance = axios.create({
    baseURL: "http://localhost:4000",
    headers: {
        'Content-Type': 'application/json',
        'x-access-token': localStorage.getItem("token")
    },
})

export default instance