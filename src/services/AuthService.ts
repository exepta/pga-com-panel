import axios from "axios";
import {AUTH_REST_POINT} from "../REST.ts";

export const login = async (data: string, password: string) => {
    let state: boolean = false;
    await axios.post(`${AUTH_REST_POINT}/login`, {
        username: data,
        password: password,
    }, {
        headers: {
            "Content-Type": "application/json",
            "Access-Control-Allow-Origin": "*",
            "Accept": "application/json",
        }
    }).then((response) => {
        if (response.status === 200) {
            localStorage.setItem("token", response.data.token);
        }
        state = true;
    }).catch((error) => {
        console.log(error);
        if(error.response.status === 401 || error.response.status === 403) {
            localStorage.removeItem("token");
        }
    });

    return state;
}